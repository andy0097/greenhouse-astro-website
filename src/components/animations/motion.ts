/**
 * Choreography for the wireframe process animations.
 *
 * Every animation is one looping timeline measured in seconds. Instead of
 * juggling animation-delays (which drift elements out of phase when the
 * loop restarts), each element gets its own generated @keyframes spanning
 * the whole loop, so all of them restart on the same frame — while the
 * scene is faded out.
 *
 *   const tl = createTimeline("wa-discover", 10);
 *   tl.add(".note-0", [...pop(0.4), [4, "fill:var(--wire-100)"]]);
 *   <style is:inline set:html={tl.css()} />
 *
 * To retime a beat, change its seconds. Frames are "carried forward":
 * every property keeps its last value until a later frame changes it, so a
 * gap between two frames is a hold, never a slow drift.
 */

export type Frame = readonly [seconds: number, declarations: string];

/** Smooth in-out — the default for moves and fades. */
export const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
/** Slight overshoot — for things that pop onto the canvas. */
export const EASE_POP = "cubic-bezier(0.34, 1.45, 0.64, 1)";

const parse = (declarations: string): [string, string][] =>
  declarations
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const colon = part.indexOf(":");
      return [part.slice(0, colon).trim(), part.slice(colon + 1).trim()];
    });

export function createTimeline(scope: string, total: number) {
  const rules: string[] = [];
  let count = 0;

  const pct = (t: number) =>
    `${Math.min(100, Math.max(0, (t / total) * 100)).toFixed(3)}%`;

  /** Animate every element matching `selector` (inside the scope) through `frames`. */
  function add(selector: string, frames: Frame[], ease = EASE) {
    if (frames.length === 0) return;
    const sorted = [...frames].sort((a, b) => a[0] - b[0]);

    // Seed each property with its earliest value, then carry it forward.
    const state = new Map<string, string>();
    for (const [, declarations] of sorted) {
      for (const [prop, value] of parse(declarations)) {
        if (!state.has(prop)) state.set(prop, value);
      }
    }
    const full = (declarations: string) => {
      for (const [prop, value] of parse(declarations)) state.set(prop, value);
      return [...state].map(([prop, value]) => `${prop}:${value}`).join(";");
    };

    const first = full(sorted[0][1]);
    const steps = sorted.map(([t, declarations]) => `${pct(t)}{${full(declarations)}}`);
    const last = [...state].map(([prop, value]) => `${prop}:${value}`).join(";");

    const name = `${scope}-${count++}`;
    rules.push(`@keyframes ${name}{0%{${first}}${steps.join("")}100%{${last}}}`);
    rules.push(`.${scope} ${selector}{animation:${name} ${total}s ${ease} infinite}`);
  }

  return { add, css: () => rules.join("\n") };
}

/* ── Frame presets ─────────────────────────────────────────────────────
   Spread them into `add()`, and append plain frames for later beats. */

export const fadeIn = (t: number, d = 0.5): Frame[] => [
  [t, "opacity:0"],
  [t + d, "opacity:1"],
];

export const fadeOut = (t: number, d = 0.5): Frame[] => [
  [t, "opacity:1"],
  [t + d, "opacity:0"],
];

export const fadeUp = (t: number, d = 0.6, y = 10): Frame[] => [
  [t, `opacity:0;transform:translate(0px,${y}px)`],
  [t + d, "opacity:1;transform:translate(0px,0px)"],
];

export const pop = (t: number, d = 0.5): Frame[] => [
  [t, "opacity:0;transform:scale(0.4)"],
  [t + d, "opacity:1;transform:scale(1)"],
];

/** Grow from the left edge — give the element class `o-left`. */
export const growX = (t: number, d = 0.45): Frame[] => [
  [t, "transform:scaleX(0)"],
  [t + d, "transform:scaleX(1)"],
];

/** Draw a stroke on — give the path pathLength="1" and class `drawn`. */
export const draw = (t: number, d = 0.8): Frame[] => [
  [t, "stroke-dashoffset:1"],
  [t + d, "stroke-dashoffset:0"],
];

/** The wrapper every scene's moving content sits in: fades in at the top
 *  of the loop and out at the end, so the restart is never seen. */
export const sceneFade = (total: number): Frame[] => [
  [0, "opacity:0"],
  [0.4, "opacity:1"],
  [total - 0.7, "opacity:1"],
  [total - 0.2, "opacity:0"],
];

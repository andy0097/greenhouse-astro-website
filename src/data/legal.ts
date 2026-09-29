/** Legal documents, rendered by `LegalDocument.astro`. Text is the supplied
 *  Privacy and Cookie policies, with the duplicated table of contents and
 *  repeated paragraphs removed and the numbering made consistent. */

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head?: string[]; rows: string[][] };

export interface LegalDoc {
  title: string;
  description: string;
  updated?: string;
  blocks: LegalBlock[];
}

const GDPR =
  "Art. 6(1) a), b), c) GDPR - Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)";

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  description:
    "How Greenhouse collects, uses, stores and protects personal data, and how to exercise your rights under the GDPR.",
  updated: "March 25, 2024",
  blocks: [
    {
      type: "p",
      text: "Thank you for your interest in our company, website, services, and/or products.",
    },
    {
      type: "p",
      text: "When you wish to establish a relationship with us and use the services of our company, Studio Unveil SRL (trading as Greenhouse), you entrust us with information about yourself, also known as personal data, and we thank you for the trust you place in us. The protection and confidentiality of personal data is a very important matter for us, and we strive to store and process them safely and carefully.",
    },
    {
      type: "p",
      text: 'In this regard, we explain clearly and transparently our practices regarding the privacy of your data in this document (hereinafter referred to as the "Privacy Policy," "This document," or simply "Document").',
    },
    {
      type: "p",
      text: 'Our privacy policy aims to inform you about the processing of your personal data in connection with your visit to our website ghdesign.studio (hereinafter referred to as the "website") and your use of any additional services offered by Studio Unveil SRL (Greenhouse).',
    },
    {
      type: "p",
      text: "By visiting the website, purchasing our products and/or services, or interacting with us through any means, you declare that you agree with the Privacy Policy. If you do not agree with the terms described in this Document, please do not use our services.",
    },
    {
      type: "p",
      text: "We inform you that Studio Unveil SRL is a personal data controller within the meaning of the GDPR for the processing of personal data.",
    },

    { type: "h2", text: "1. Introduction. Definitions" },
    { type: "h3", text: "1.1. Purpose of the privacy policy" },
    {
      type: "p",
      text: "The purpose of this Privacy Policy is to explain to you what information we process (collect, use, share), why we process it, how we process it, your rights under the GDPR, and how you can update, manage, export, and delete it. In this regard, we act as a data controller and, by law, we are obligated to provide you with this information.",
    },
    {
      type: "p",
      text: "Please note that this Privacy Policy applies wherever you find us online.",
    },
    { type: "h3", text: "1.2. Who are we?" },
    { type: "p", text: "Below you can find our identification data:" },
    {
      type: "table",
      rows: [
        ["Name", "Studio Unveil SRL (trading as Greenhouse)"],
        ["Website", "ghdesign.studio"],
        ["Registered office", "Franz Joseph Haydn No.13, Oradea, Romania"],
        ["Trade Register Number", "J5/920/05.04.2021"],
        ["Unique Identification Code (CUI)", "44050620"],
        ["E-mail", "andrei@ghdesign.studio"],
      ],
    },
    {
      type: "p",
      text: "In accordance with applicable law, our company is a personal data controller, and to ensure the safe processing of your data, we make every effort to implement reasonable and adequate technical and organizational measures to protect your personal data.",
    },
    { type: "h3", text: "1.3. Who are you?" },
    {
      type: "p",
      text: 'According to the law, you, as the individual beneficiary of our services/products, the representative or contact person of a company that is our client or potential client, the visitor of the website, or any person in any kind of relationship with us, are considered a "data subject," meaning an identified or identifiable natural person. To be fully transparent regarding data processing and to allow you to easily exercise your rights at any time, we have implemented measures to facilitate the exercise of these rights.',
    },
    { type: "h3", text: "1.4. Definitions" },
    {
      type: "table",
      rows: [
        [
          "Personal data",
          'Any information relating to an identified or identifiable natural person ("data subject"). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.',
        ],
        [
          "Processing",
          "Any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment or combination, restriction, erasure, or destruction.",
        ],
        [
          "GDPR (General Data Protection Regulation)",
          "Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC.",
        ],
        [
          "The controller or We",
          "Studio Unveil SRL, trading as Greenhouse, a Romanian company with registered office at Franz Joseph Haydn No.13 Oradea, Romania, registered with the Trade Register under no. J5/920/05.04.2021, having fiscal registration code 44050620.",
        ],
        [
          "Data subject",
          "Any identified or identifiable natural person whose data are processed by us as the controller, such as customers, potential customers, or website visitors.",
        ],
        [
          "Consent",
          "Any freely given, specific, informed, and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.",
        ],
        [
          "Anonymization",
          "The irreversible removal of personal data identification so that the person can no longer be identified using reasonable time, costs, and technology, either by the Controller or by any other person, to identify that natural person. The principles of personal data processing do not apply to anonymized data, as they are no longer considered personal data.",
        ],
      ],
    },
    { type: "h3", text: "1.5. Other services" },
    {
      type: "p",
      text: "This Privacy Policy does not cover the applications and websites of third parties that you may access by accessing the links on our website, and we encourage you to review the privacy policy of any website and/or application before providing personal data.",
    },
    {
      type: "p",
      text: "Additionally, we are not responsible for any links from our commercial partners or those placing advertisements on our website, including those on our website and social media profiles. When you click on those links, third parties may collect or share data about you.",
    },
    {
      type: "p",
      text: "You should know that we do not control any links posted on the site by us (such as links to our social networks or to third-party services) and that you are fully responsible when accessing such links and assume any kind of damage (direct or indirect) that may occur.",
    },
    { type: "h3", text: "1.6. Complaints" },
    {
      type: "p",
      text: "For any kind of issue or concern regarding the processing of personal data, you should know that you can file a complaint with the supervisory authority for personal data protection, but please send us a request to the address mentioned in this document first, and we will make every effort to resolve your request as soon as possible, amicably.",
    },
    { type: "p", text: "For Romania, the contact details are as follows:" },
    {
      type: "table",
      rows: [
        ["Name", "National Authority for the Supervision of Personal Data Processing"],
        [
          "Address",
          "B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, Poștal Code: 010336, Bucharest, Romania",
        ],
        ["Phone", "+40.318.059.211 or +40.318.059.212"],
        ["E-mail", "anspdcp@dataprotection.ro"],
      ],
    },

    { type: "h2", text: "2. Personal Data and Data Processing" },
    { type: "h3", text: "2.1. The data we collect and how we use it" },
    {
      type: "p",
      text: "Personal data or personal information encompasses all information about an individual that can help identify that person, excluding anonymized data where identity has been removed.",
    },
    {
      type: "p",
      text: "When you browse our website or when you contact us for any purpose using any communication channel, you may provide us with your personal data. We may need to collect, use, store, or transfer certain personal data, either directly from you or from other sources, as explained in the table below:",
    },
    {
      type: "table",
      head: ["Category", "Included data", "Legal bases"],
      rows: [
        [
          "Identification data",
          "Name, surname, company name, trade register number, unique identification code, username, or similar identifier, position, preferred language of interaction with us, country, etc.",
          GDPR,
        ],
        [
          "Contact information",
          "Billing address, email address, phone number",
          GDPR,
        ],
        [
          "Profile and usage data",
          "Your interests and preferences, feedback provided, and information about how you use our website and services.",
          GDPR,
        ],
        [
          "Financial and transactional data",
          "Details of payments to and from you and of the services you have purchased from us.",
          GDPR,
        ],
        [
          "Marketing and communication data",
          "Your preferences to receive marketing materials from us and from our third parties, and preferred methods of communication",
          GDPR,
        ],
        [
          "Automated/technical data",
          "IP (internet protocol) address, login data, browser type and version, location settings and time zone, browser plug-ins and versions, operating system, platform, and other technologies on the devices you use to access this site",
          "Art. 6(1) GDPR",
        ],
      ],
    },
    {
      type: "p",
      text: "We inform you that we do not collect any Special Categories of Personal Data about you (this includes data about racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying you, data concerning health or data concerning your sex life or sexual orientation, or information about criminal convictions and offenses).",
    },
    { type: "h3", text: "2.2. What happens if you do not provide us with your data" },
    {
      type: "p",
      text: "When we ask you to provide personal data to give you access to certain features or services of the site, we will mark some fields as mandatory because this information is necessary for us to provide you with the service or to give you access to that particular functionality.",
    },
    {
      type: "p",
      text: "Please note that if you decide not to provide us with this information, we may not be able to respond to your request or provide you with these services or functionalities.",
    },
    { type: "h3", text: "2.3. The purpose for which we collect personal data" },
    {
      type: "table",
      head: ["Personal data", "Purpose"],
      rows: [
        [
          "Identification data, contact data, financial and transactional data, profile data, marketing and communication data, automated/technical data",
          "Improvement of services. Using analytical data to improve the website, services, and experience.",
        ],
        [
          "Identification data, contact data, financial and transactional data, profile data, marketing and communication data",
          "Conclusion and execution of the sales or service contract you enter into with us.",
        ],
        [
          "Identification data, contact data, financial data, transaction data, profile data, marketing and communication data",
          "Requests or inquiries you send us. To manage the relationship we have with you, which may include notifying you about changes to terms and conditions and processing policies or suggesting leaving us a review or participating in a survey.",
        ],
        [
          "Identification data, contact data, financial and transactional data, profile data, usage data, marketing and communication data, automated/technical data",
          "Marketing. To deliver relevant content and personalized advertisements and to measure and understand the effectiveness of the advertisements we provide to you.",
        ],
      ],
    },
    {
      type: "p",
      text: "We inform you that we will use your personal data only for the purposes for which we collected this data, unless we reasonably consider that we need to use them for another reason and that reason is compatible with the original purpose.",
    },
    {
      type: "p",
      text: "Please note that we may process your personal data without informing you or without your consent, in accordance with the rules above, where the law allows us to do so.",
    },
    { type: "h3", text: "2.4. Legal basis for processing personal data" },
    {
      type: "p",
      text: "Our legal basis for processing your personal data will generally be as follows:",
    },
    {
      type: "ul",
      items: [
        "Your consent for processing personal data;",
        "Processing is necessary for the performance of a contract between you and us;",
        "Processing is necessary for the purposes of our legitimate interests or those of another party.",
      ],
    },

    { type: "h2", text: "3. Disclosure of Personal Data and Data Transfers" },
    {
      type: "p",
      text: "We inform you that we may disclose your data, in compliance with applicable law, to business partners or other third parties. We constantly make reasonable efforts to ensure that these third parties have implemented adequate protection and security measures. With these third parties, we have contractual clauses so that your data is protected. In these situations, we will ensure that any transfer is legitimate according to the law.",
    },
    {
      type: "p",
      text: "Additionally, we may transfer data to other parties with your consent or according to your instructions, such as when you exercise a portability request or to competent state authorities, based on and within the limits of the law and as a result of express requests.",
    },
    {
      type: "p",
      text: "The transfer of personal data to a third country may only take place if the country to which the transfer is intended provides an adequate level of protection.",
    },
    {
      type: "p",
      text: "The transfer of data to a country whose legislation does not provide a level of protection at least equal to that offered by the General Data Protection Regulation is possible only if there are sufficient guarantees regarding the protection of the fundamental rights of the data subjects. These guarantees will be established by us through contracts concluded with providers/service providers to which the transfer of your personal data will take place.",
    },
    {
      type: "p",
      text: "Whenever we transfer your personal data outside the European Economic Area (EEA), we will ensure that there is a similar level of protection through one of the following safeguard mechanisms:",
    },
    {
      type: "ul",
      items: [
        "We will transfer your personal data to countries where the European Commission has demonstrated an adequate level of safety for personal data.",
        "When we use certain service providers, we may use certain contract models provided and approved by the European Commission that offer personal data the same protection they have in Europe.",
      ],
    },

    { type: "h2", text: "4. Data Storage" },
    {
      type: "p",
      text: "You should note that we only store your personal data for the period necessary to achieve the purposes, but not more than 5 years from the termination of the contract or the last interaction with us.",
    },
    {
      type: "p",
      text: "After the end of the period, personal data will be destroyed or deleted from the computer systems or transformed into anonymous data for use in scientific, historical, or statistical research purposes.",
    },
    {
      type: "p",
      text: "In certain circumstances, we may anonymize personal data (so that they can no longer be associated with you) for scientific, historical, or statistical research purposes, in which case we may use this information for an unlimited period without notifying you in advance. Please note that in certain expressly regulated situations, we store data for the period required by law.",
    },
    {
      type: "table",
      head: ["Categories of personal data", "Storage period"],
      rows: [
        ["Email address, message content", "5 years from the last interaction with us"],
        [
          "Billing information (i.e., address, customer name, delegate name)",
          "10 years in accordance with legislation",
        ],
        ["Other personal data", "5 years"],
      ],
    },

    { type: "h2", text: "5. Data Security" },
    {
      type: "p",
      text: "We understand how important the security of personal data is and take the necessary measures to protect our customers and other individuals whose data we process from unauthorized access to personal data, as well as from unauthorized alteration, disclosure, or destruction of the data we process in our current activities. We have implemented the following technical and organizational measures for the security of personal data:",
    },
    {
      type: "table",
      rows: [
        [
          "Dedicated policies",
          "We constantly adopt and review internal practices and policies for the processing of personal data (including physical and electronic security measures) to protect our systems from unauthorized access or other potential security threats. These policies undergo continuous checks to ensure that we comply with legal requirements and that the systems operate properly.",
        ],
        [
          "Data minimization",
          "We ensure that your personal data processed by us is limited only to what is necessary, adequate, and relevant for the purposes stated in this Policy.",
        ],
        [
          "Access restriction to data",
          "We strive to restrict access to the personal data we process to the minimum necessary: employees, collaborators, and other individuals who need to access this data to process it and provide a service. Our partners and collaborators are subject to strict confidentiality obligations (either through contract or legal requirements).",
        ],
        [
          "Specific technical measures",
          "We employ technologies to ensure the security of our clients, always striving to implement the most optimal solutions for data protection. Additionally, we perform regular data backups to recover them in case of any incidents and have implemented periodic audit procedures regarding the security of the equipment used. However, no website, application, or internet connection is entirely secure and immune from threats.",
        ],
        [
          "Ensuring the accuracy of your data",
          "Sometimes we may ask you to confirm the accuracy or currency of your data to ensure that they reflect reality.",
        ],
        [
          "Staff training",
          "We continuously train and test employees and collaborators on legislation and best practices in the field of personal data processing.",
        ],
        [
          "Data anonymization",
          "Where possible, we try to anonymize/pseudonymize the personal data we process as much as possible so that we can no longer identify the individuals to whom they refer.",
        ],
      ],
    },
    {
      type: "p",
      text: "However, despite our constant efforts to ensure the security of the data you entrust to us, we may also experience less fortunate events and security incidents/breaches. In these cases, we will strictly follow the incident reporting and notification procedure and take all necessary measures to restore the situation to normal as soon as possible.",
    },

    { type: "h2", text: "6. Direct Marketing" },
    {
      type: "p",
      text: "To the extent that we have obtained your prior consent or you are already a customer of the company, we may use direct marketing technologies using the information collected about you. Currently, we send commercial messages via email (email marketing).",
    },
    {
      type: "p",
      text: "You can object to direct marketing and/or withdraw your consent at any time by following the unsubscribe instructions in each email or by sending a request to this effect to the email address andrei@ghdesign.studio.",
    },

    { type: "h2", text: "7. Your Rights - Questions, Requests, and Exercising Rights" },
    {
      type: "p",
      text: "We are not obligated to appoint a data protection officer, so any questions regarding the use of your personal data should be addressed to the contact details above.",
    },
    {
      type: "p",
      text: "For any questions, inquiries, comments, or complaints regarding the processing of your information or if you wish to exercise your legal rights or privacy concerns, you can contact us at the email address andrei@ghdesign.studio.",
    },
    { type: "p", text: "Your rights under the GDPR are as follows:" },
    {
      type: "table",
      rows: [
        ["Right to be informed", "About the processing of your data."],
        [
          "Right of access to data",
          "You have the right to obtain from us confirmation as to whether or not personal data concerning you are being processed, and, where that is the case, access to such data and the information provided for in Article 15(1) of the GDPR.",
        ],
        [
          "Right to rectify inaccurate or incomplete data",
          "You have the right to obtain from us without undue delay the rectification of inaccurate personal data concerning you.",
        ],
        [
          'Right to erasure ("right to be forgotten")',
          "In the situations provided for in Article 17 of the GDPR, you have the right to request and obtain the erasure of personal data.",
        ],
        [
          "Right to restriction of processing",
          "In the cases provided for in Article 18 of the GDPR, you have the right to request and obtain restriction of processing.",
        ],
        [
          "Right to data portability",
          "You have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format and have the right to transmit those data to another controller without hindrance from us.",
        ],
        [
          "Right to object to data processing",
          "In the cases provided for in Article 21 of the GDPR, you have the right to object to the processing of data.",
        ],
        [
          "Right not to be subject to automated decisions",
          "You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.",
        ],
        [
          "Right to judicial remedy",
          "The right to judicial remedy for the defense of your rights and interests.",
        ],
      ],
    },
    {
      type: "p",
      text: "Please note that the rights listed above are not absolute. There are exceptions, which is why each request received will be analyzed to decide whether it is justified or not. To the extent that the request is justified, we will facilitate the exercise of your rights, and if the request is unfounded, we will reject it, but we will inform you of the reasons for the refusal and of your rights to lodge a complaint with the Supervisory Authority and to seek judicial remedy.",
    },
    {
      type: "p",
      text: "Additionally, we will attempt to respond to your request within 30 (thirty) days. However, the deadline may be extended depending on various factors, such as the complexity of the request, the large number of requests received, or the inability to identify you within a reasonable time. If, despite all efforts, we are unable to identify you, and you do not provide us with additional information to successfully identify you, we are not obliged to comply with the request.",
    },

    { type: "h2", text: "8. Changes, Modifications and Updates to the Privacy Policy" },
    {
      type: "p",
      text: "We may occasionally update the Privacy Policy and will notify you through the website or by email about the latest version. All updates and changes to this document are effective immediately upon notification, which we will do by posting on the website and/or by email notification. Even if you do not receive a notification, we encourage you to periodically access and read the Privacy Policy to stay informed of the latest versions.",
    },
  ],
};

export const COOKIES: LegalDoc = {
  title: "Cookie Policy",
  description:
    "Which cookies this website uses and why, and how to manage or disable them in your browser.",
  blocks: [
    { type: "h2", text: "1. Additional information about cookie files" },
    {
      type: "p",
      text: "Our goal is to provide you with the most interactive online experience, and to achieve this, we use cookies or similar techniques. It is important for you to know what cookies our website uses and for what purpose, as this will help protect your confidentiality while also ensuring the ease of use of our website.",
    },
    { type: "h2", text: "2. What are cookies?" },
    {
      type: "p",
      text: "Cookies are small text files that are stored on your device (computer or mobile device) when you access certain websites.",
    },
    { type: "h2", text: "3. Why are cookies used?" },
    { type: "p", text: "Cookies can be used for various purposes:" },
    {
      type: "table",
      rows: [
        [
          "3.1 Necessary cookies",
          "May be required to ensure the proper functioning of the website. For example, we remember your cookie choice on this site. These are referred to as essential cookies.",
        ],
        [
          "3.2 Analytical cookies",
          "Used to analyze how a website is used, to track the number of visitors, and to find out how the website can be improved. We do not associate website usage statistics and other reports with individual persons.",
        ],
      ],
    },
    {
      type: "p",
      text: "Where you accept analytical cookies, information generated by cookies regarding how the website is used – standard internet usage log information (including your IP address) and anonymous visitor behavior information – is transmitted to Google and stored by them, including on servers in the United States. Before being transmitted to Google, your IP address is anonymized.",
    },
    { type: "h2", text: "4. How you can manage or disable cookies in your browser" },
    {
      type: "p",
      text: "You should know that you can manage your cookie preferences from the notice on our website or from your browser settings, and most browsers allow you to see what cookies you have and to delete them individually or to block cookies from third parties, to block cookies from certain websites, to block the setting of all cookies, or to delete all cookies when you close the browser.",
    },
    {
      type: "p",
      text: "If you disable all (our) cookies in your browser settings, certain sections or functions of our websites may not work, as the browser may prevent us from setting cookies necessary for the website to function. Therefore, we recommend that you do not disable all cookies in your web browser.",
    },
  ],
};

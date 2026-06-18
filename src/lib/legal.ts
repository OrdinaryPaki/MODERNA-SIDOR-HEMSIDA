export type LegalSection = {
  title: string;
  body?: string[];
  items?: string[];
  mobileBottomOffset?: number;
  contact?: {
    label: string;
    email: string;
    emailHref: string;
    phone: string;
    phoneHref: string;
  };
};

export type LegalPageContent = {
  title: string;
  titleWidth?: string;
  updated: string;
  mobileTopPadding?: number;
  mobileSectionGap?: number;
  desktopSectionGap?: number;
  mobilePageBottomPadding?: number;
  pageBottomPadding?: number;
  sections: LegalSection[];
};

export const privacyPolicy: LegalPageContent = {
  title: "Privacy policy",
  titleWidth: "534px",
  updated: "12.01.2025",
  mobileTopPadding: 52,
  mobileSectionGap: 44,
  desktopSectionGap: 40,
  mobilePageBottomPadding: 104,
  pageBottomPadding: 100,
  sections: [
    {
      title: "1. Information We Collect",
      body: ["We may collect the following types of information:"],
      items: [
        "Personal Information: Your name, email address, phone number, and billing details when you contact us, request a quote, or purchase services.",
        "Usage Data: Information about how you use our website, such as IP address, browser type, device information, and pages visited.",
        "Cookies & Tracking: We use cookies and similar technologies to improve site performance and user experience.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      body: ["We use your information to:"],
      items: [
        "Provide and deliver our services.",
        "Respond to your inquiries and project requests.",
        "Send updates, newsletters, or marketing communications (only if you’ve opted in).",
        "Analyze site performance and improve our website.",
        "Comply with legal obligations.",
      ],
    },
    {
      title: "3. How We Share Information",
      body: ["We do not sell your personal data. We may share information only with:"],
      mobileBottomOffset: 21,
      items: [
        "Trusted service providers (such as payment processors, hosting providers, or analytics tools).",
        "Legal authorities when required by law or to protect our rights.",
      ],
    },
    {
      title: "4. Data Security",
      body: [
        "We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure.",
      ],
    },
    {
      title: "5. Your Rights",
      body: ["Depending on your location, you may have the right to:"],
      items: [
        "Access, update, or delete your personal data.",
        "Opt out of marketing communications.",
        "Restrict or object to certain data processing activities.",
        "Request a copy of the data we hold about you.",
      ],
    },
    {
      title: "6. Third-Party Links",
      body: [
        "Our website may contain links to third-party sites. We are not responsible for the privacy practices of these websites.",
      ],
    },
    {
      title: "7. Children’s Privacy",
      body: [
        "Our services are not directed at individuals under the age of 16, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      title: "8. Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised “last updated” date.",
      ],
    },
    {
      title: "9. Contact Us",
      body: [
        "If you have questions about this Privacy Policy or how we handle your data, please contact us:",
      ],
      contact: {
        label: "Nori Studio",
        email: "noristudio@gmail.com",
        emailHref: "mailto:webdesignbylazar@gmail.com",
        phone: "+1 (416) 555-0198",
        phoneHref: "tel:+1234567890",
      },
    },
  ],
};

export const termsOfService: LegalPageContent = {
  title: "Terms of service",
  titleWidth: "664px",
  updated: "12.01.2025",
  mobileTopPadding: 12,
  mobileSectionGap: 44,
  desktopSectionGap: 40,
  mobilePageBottomPadding: 93,
  pageBottomPadding: 100,
  sections: [
    {
      title: "1. Acceptance of Terms",
      body: [
        "By using our website or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, you should not use our services.",
      ],
    },
    {
      title: "2. Services",
      body: [
        "Nori Studio provides design, branding, and creative services as described on our website or in project agreements. We reserve the right to modify, expand, or discontinue services at any time.",
      ],
    },
    {
      title: "3. Client Responsibilities",
      body: ["When working with us, you agree to:"],
      items: [
        "Provide accurate and timely information required for project completion.",
        "Review and approve deliverables within agreed timeframes.",
        "Respect our intellectual property rights and usage guidelines.",
      ],
    },
    {
      title: "4. Payments & Billing",
      items: [
        "Project fees will be outlined in proposals, contracts, or invoices.",
        "Payments are due according to the terms stated in each agreement.",
        "Late payments may result in project delays or suspension of services.",
      ],
    },
    {
      title: "5. Intellectual Property",
      items: [
        "Client Materials: You retain ownership of materials you provide to us.",
        "Nori Studio Work: Upon full payment, you are granted rights to use the final deliverables as agreed. Nori Studio retains the right to showcase work in our portfolio, unless otherwise agreed in writing.",
        "Third-Party Assets: Use of fonts, stock images, or licensed materials is subject to their respective license terms.",
      ],
    },
    {
      title: "6. Limitation of Liability",
      body: ["Nori Studio is not liable for:"],
      items: [
        "Indirect, incidental, or consequential damages.",
        "Losses arising from third-party services, hosting providers, or external platforms.",
        "Any misuse of deliverables outside of agreed purposes.",
      ],
    },
    {
      title: "7. Termination",
      body: [
        "Either party may terminate a project or service agreement if the other party breaches these Terms. Fees for completed work and expenses incurred up to termination remain payable.",
      ],
    },
    {
      title: "8. Confidentiality",
      body: [
        "Both parties agree to keep confidential any non-public information shared during the course of a project.",
      ],
    },
    {
      title: "9. Website Use",
      items: [
        "You may not misuse our website, attempt unauthorized access, or engage in harmful activities.",
        "We may update or remove content at any time without notice.",
      ],
    },
    {
      title: "10. Governing Law",
      body: [
        "These Terms shall be governed by the laws of [Insert Country/State]. Any disputes will be handled in the courts of that jurisdiction.",
      ],
    },
    {
      title: "11. Changes to Terms",
      body: [
        "We may update these Terms from time to time. The updated version will be posted on this page with a new “last updated” date.",
      ],
    },
    {
      title: "12. Contact Us",
      body: [
        "If you have questions about these Terms, please contact us:",
      ],
      contact: {
        label: "Nori Studio",
        email: "noristudio@gmail.com",
        emailHref: "mailto:webdesignbylazar@gmail.com",
        phone: "+1 (416) 555-0198",
        phoneHref: "tel:+1234567890",
      },
    },
  ],
};

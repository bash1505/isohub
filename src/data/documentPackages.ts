
import { DocumentPackage } from '@/components/DocumentPackageCard';

export const documentPackages: DocumentPackage[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 – Quality Management System Package",
    description: "Complete documentation package for ISO 9001:2015 QMS implementation",
    price: 7999,
    includes: [
      "Quality Manual template",
      "Quality Policy and Objectives",
      "Process interaction map",
      "Risk & opportunity register",
      "Internal audit checklist",
      "Non-conformance log",
      "Management review templates"
    ],
    importance: "Foundational for organizations focused on customer satisfaction, process improvement, and operational consistency. Required by many clients and contracts as a sign of quality commitment."
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015 – Environmental Management System Package",
    description: "Complete documentation package for ISO 14001:2015 EMS implementation",
    price: 6999,
    includes: [
      "Environmental Manual",
      "Aspects & Impacts Register",
      "Legal & Other Requirements Tracker",
      "Emergency Preparedness Plan",
      "Waste Management Policy"
    ],
    importance: "Helps organizations reduce environmental impact, comply with regulations, and improve sustainability practices."
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018 – Occupational Health & Safety Management System",
    description: "Documentation bundle for implementing ISO 45001:2018 OH&S",
    price: 6999,
    includes: [
      "OH&S Manual",
      "Hazard Identification Register",
      "Incident Report Forms",
      "Emergency Response Plan",
      "Training & Competency Matrix"
    ],
    importance: "Protects the workforce, lowers risks, and ensures legal compliance with workplace safety laws."
  },
  {
    id: "iso-27001",
    title: "ISO 27001:2022 – Information Security Management System",
    description: "Documentation package for ISO 27001:2022 ISMS implementation",
    price: 8999,
    includes: [
      "Information Security Policy",
      "Risk Assessment Methodology",
      "Asset Inventory Template",
      "Access Control Policy",
      "Business Continuity Plan"
    ],
    importance: "Essential for IT companies and organizations dealing with sensitive data. Enhances data security, reduces breach risks, and meets client expectations."
  },
  {
    id: "iso-22000",
    title: "ISO 22000:2018 - Food Safety Management System Package",
    description: "Complete documentation bundle for implementing ISO 22000:2018 FSMS",
    price: 7999,
    includes: [
      "Food Safety Management System Manual",
      "HACCP Plan Templates",
      "Prerequisite Programs (PRPs) Documentation",
      "Standard Operating Procedures (SOPs)",
      "Food Safety Policy and Objectives",
      "Risk Assessment Templates",
      "Internal Audit Checklists"
    ],
    importance: "Essential for food industry organizations to ensure food safety, meet regulatory requirements, and gain customer confidence. Helps systematically control food safety hazards and optimize processes."
  },
  {
    id: "iso-starter",
    title: "ISO Implementation Starter Pack (For SMEs)",
    description: "Essential resources for organizations starting their ISO journey",
    price: 3999,
    includes: [
      "Implementation Plan Template",
      "Project Charter",
      "Gap Analysis Tool",
      "Communication Plan",
      "Training Presentation Slides (editable)"
    ],
    importance: "Perfect for small to medium-sized companies starting their ISO journey. Helps them organize and roll out ISO implementation systematically."
  },
  {
    id: "auditor-toolkit",
    title: "Internal Auditor Toolkit",
    description: "Complete package for performing internal ISO audits",
    price: 4999,
    includes: [
      "Internal Audit Procedure",
      "Audit Schedule Template",
      "Audit Report Template",
      "Auditor Competency Checklist",
      "Non-conformance & Corrective Action Tracker"
    ],
    importance: "Empowers internal teams to maintain compliance and prepare for certification audits."
  },
  {
    id: "mega-bundle",
    title: "ISO Compliance Mega Bundle",
    description: "Comprehensive documentation covering multiple ISO standards",
    price: 17999,
    includes: [
      "All core documentation across ISO 9001, 14001, 45001",
      "Integrated management system templates",
      "Common procedures across standards",
      "Document control procedure",
      "Audit management system",
      "Non-conformance handling process"
    ],
    importance: "Ideal for companies seeking to certify in multiple standards. Saves time, reduces duplication, and ensures cohesion."
  }
];

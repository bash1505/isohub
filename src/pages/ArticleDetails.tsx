import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Calendar, User } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';

const articles = {
  "intro-iso9001": {
    title: "Introduction to ISO 9001:2015",
    content: `
      <h2>What is ISO 9001:2015?</h2>
      <p>ISO 9001:2015 is the international standard for Quality Management Systems (QMS). It specifies requirements for a QMS that organizations can use to develop their own programs. ISO 9001:2015 is the most popular standard in the ISO 9000 series and the only standard in the series that organizations can certify to.</p>
      
      <h2>The Key Principles of ISO 9001</h2>
      <p>The standard is based on seven quality management principles:</p>
      <ul>
        <li><strong>Customer Focus:</strong> Meeting customer requirements and exceeding expectations</li>
        <li><strong>Leadership:</strong> Establishing unity of purpose and direction</li>
        <li><strong>Engagement of People:</strong> Competent, empowered, and engaged people at all levels</li>
        <li><strong>Process Approach:</strong> Managing activities as processes that link together</li>
        <li><strong>Improvement:</strong> Ongoing focus on continuous improvement</li>
        <li><strong>Evidence-based Decision Making:</strong> Decisions based on the analysis of data</li>
        <li><strong>Relationship Management:</strong> Managing relationships with interested parties</li>
      </ul>
      
      <h2>Benefits of ISO 9001:2015 Implementation</h2>
      <p>Organizations implementing ISO 9001:2015 can expect to see benefits such as:</p>
      <ul>
        <li>Improved product and service quality</li>
        <li>Increased customer satisfaction</li>
        <li>Better process integration</li>
        <li>Evidence-based decision making</li>
        <li>Greater market opportunities</li>
        <li>Continuous improvement culture</li>
        <li>Enhanced operational efficiency</li>
      </ul>
      
      <h2>Key Requirements of ISO 9001:2015</h2>
      <p>The standard follows a Plan-Do-Check-Act cycle and includes requirements for:</p>
      <ul>
        <li>Context of the organization</li>
        <li>Leadership and commitment</li>
        <li>Planning</li>
        <li>Support</li>
        <li>Operation</li>
        <li>Performance evaluation</li>
        <li>Improvement</li>
      </ul>
      
      <h2>Getting Started with ISO 9001:2015</h2>
      <p>To begin your ISO 9001:2015 implementation journey:</p>
      <ol>
        <li>Gain management commitment</li>
        <li>Identify key processes and their interactions</li>
        <li>Conduct a gap analysis against the standard</li>
        <li>Develop an implementation plan</li>
        <li>Train your team on ISO 9001 requirements</li>
        <li>Document your quality management system</li>
        <li>Implement the system</li>
        <li>Conduct internal audits</li>
        <li>Management review</li>
        <li>Certification audit</li>
      </ol>
    `,
    author: "Sebastian Fisher",
    date: "15 March 2025",
    readTime: "5 min",
    category: "Beginner",
    standard: "ISO 9001",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
  },
  "risk-based-thinking": {
    title: "Risk-Based Thinking in ISO Standards",
    content: `
      <h2>Understanding Risk-Based Thinking</h2>
      <p>Risk-based thinking is a conceptual approach required by all modern ISO management system standards. It ensures organizations identify, consider, and control risks throughout their processes. Unlike formal risk management, risk-based thinking is woven into the entire management system.</p>
      
      <h2>Evolution of Risk in ISO Standards</h2>
      <p>Prior to the 2015 revisions, ISO standards handled risk in different ways. The High-Level Structure (HLS) now ensures a consistent approach to risk across all management system standards. This approach replaced the preventive action clause in previous standards with proactive risk identification.</p>
      
      <h2>Risk-Based Thinking vs. Risk Management</h2>
      <p>While risk-based thinking is mandatory, formal risk management is not. Risk-based thinking is:</p>
      <ul>
        <li>Less prescriptive</li>
        <li>Integrated throughout the management system</li>
        <li>Focused on both risks and opportunities</li>
        <li>Varies in rigor based on context</li>
      </ul>
      
      <h2>Implementing Risk-Based Thinking</h2>
      <p>To effectively implement risk-based thinking:</p>
      <ol>
        <li>Identify risks and opportunities in your processes</li>
        <li>Analyze and prioritize these risks</li>
        <li>Plan actions to address significant risks</li>
        <li>Implement these actions in your processes</li>
        <li>Check the effectiveness of actions</li>
        <li>Learn from experience and continually improve</li>
      </ol>
      
      <h2>Practical Methods for Risk Assessment</h2>
      <p>Several methods can be used for risk assessment:</p>
      <ul>
        <li><strong>SWOT Analysis:</strong> Identifying Strengths, Weaknesses, Opportunities, and Threats</li>
        <li><strong>PESTLE Analysis:</strong> Examining Political, Economic, Social, Technological, Legal, and Environmental factors</li>
        <li><strong>FMEA (Failure Mode and Effects Analysis):</strong> Identifying potential process or product failures</li>
        <li><strong>Risk Matrices:</strong> Evaluating likelihood and consequence</li>
        <li><strong>Bow-Tie Analysis:</strong> Visualizing risk event pathways</li>
      </ul>
      
      <h2>Documentation Requirements</h2>
      <p>ISO standards do not specify required documentation for risk-based thinking. Organizations determine what documentation is necessary based on their context. Common documentation includes:</p>
      <ul>
        <li>Risk and opportunity registers</li>
        <li>Process risk assessments</li>
        <li>Action plans</li>
        <li>Meeting minutes discussing risks</li>
        <li>Monitoring and measurement records</li>
      </ul>
      
      <h2>Benefits of Risk-Based Thinking</h2>
      <p>Effective risk-based thinking leads to:</p>
      <ul>
        <li>Improved governance</li>
        <li>Proactive improvement culture</li>
        <li>Greater assurance of achieving objectives</li>
        <li>Reduced negative outcomes</li>
        <li>Enhanced opportunities</li>
        <li>Better compliance management</li>
      </ul>
    `,
    author: "Estelle Fisher",
    date: "20 March 2025",
    readTime: "8 min",
    category: "Intermediate",
    standard: "Multiple",
    imageSrc: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=1200&auto=format&fit=crop"
  },
  "internal-audits": {
    title: "Conducting Effective Internal Audits",
    content: `
      <h2>The Purpose of Internal Audits</h2>
      <p>Internal audits serve as a self-assessment tool for organizations to evaluate their management system's conformity and effectiveness. They help identify areas for improvement, verify process implementation, and prepare for external certification audits.</p>
      
      <h2>Audit Program Planning</h2>
      <p>An effective audit program includes:</p>
      <ul>
        <li>Defined audit scope and objectives</li>
        <li>Comprehensive schedule covering all processes</li>
        <li>Risk-based prioritization of audit areas</li>
        <li>Selection of competent auditors</li>
        <li>Resource allocation</li>
        <li>Defined methods and procedures</li>
      </ul>
      
      <h2>Auditor Competence</h2>
      <p>Internal auditors should possess:</p>
      <ul>
        <li>Knowledge of applicable standards</li>
        <li>Understanding of audit principles and techniques</li>
        <li>Process and system thinking</li>
        <li>Industry-specific knowledge</li>
        <li>Strong communication skills</li>
        <li>Objectivity and impartiality</li>
      </ul>
      
      <h2>The Audit Process</h2>
      <h3>1. Preparation</h3>
      <p>Key preparation activities include:</p>
      <ul>
        <li>Reviewing previous audit results</li>
        <li>Analyzing process documentation</li>
        <li>Preparing checklists</li>
        <li>Communicating with audit participants</li>
        <li>Gathering necessary documents</li>
      </ul>
      
      <h3>2. Execution</h3>
      <p>During the audit:</p>
      <ul>
        <li>Conduct opening meeting</li>
        <li>Gather evidence through interviews, observation, and document review</li>
        <li>Sample appropriate activities</li>
        <li>Document findings</li>
        <li>Evaluate evidence against criteria</li>
      </ul>
      
      <h3>3. Reporting</h3>
      <p>Effective audit reports:</p>
      <ul>
        <li>Summarize the audit process</li>
        <li>Clearly state conformities and nonconformities</li>
        <li>Identify improvement opportunities</li>
        <li>Provide evidence for findings</li>
        <li>Include conclusions on system effectiveness</li>
      </ul>
      
      <h3>4. Follow-up</h3>
      <p>Crucial follow-up activities:</p>
      <ul>
        <li>Develop corrective action plans</li>
        <li>Analyze root causes</li>
        <li>Implement corrective actions</li>
        <li>Verify effectiveness</li>
        <li>Close out findings</li>
      </ul>
      
      <h2>Value-Added Auditing Techniques</h2>
      <p>To maximize audit value:</p>
      <ul>
        <li>Focus on risks and opportunities</li>
        <li>Use process-based auditing</li>
        <li>Follow audit trails</li>
        <li>Ask open-ended questions</li>
        <li>Verify statements with evidence</li>
        <li>Look for patterns across processes</li>
      </ul>
      
      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Focusing only on documentation</li>
        <li>Auditing to personal preferences</li>
        <li>Insufficient preparation</li>
        <li>Poor time management</li>
        <li>Inadequate sampling</li>
        <li>Confrontational approach</li>
        <li>Failing to follow up on findings</li>
      </ul>
    `,
    author: "Sebastian Fisher",
    date: "10 April 2025",
    readTime: "12 min",
    category: "Advanced",
    standard: "Multiple",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
  },
  "iso14001-benefits": {
    title: "Business Benefits of ISO 14001",
    content: `
      <h2>Introduction to ISO 14001</h2>
      <p>ISO 14001 is the international standard for Environmental Management Systems (EMS). It provides a framework for organizations to manage their environmental responsibilities effectively. This article explores the tangible business benefits of implementing ISO 14001.</p>
      
      <h2>1. Cost Savings</h2>
      <p>ISO 14001 implementation typically leads to significant cost reductions through:</p>
      <ul>
        <li><strong>Energy Efficiency:</strong> Systematic reduction in energy consumption</li>
        <li><strong>Waste Reduction:</strong> Minimizing waste generation and associated disposal costs</li>
        <li><strong>Resource Optimization:</strong> More efficient use of raw materials</li>
        <li><strong>Recycling Initiatives:</strong> Revenue from recyclable materials</li>
        <li><strong>Water Conservation:</strong> Reduced water usage and associated costs</li>
      </ul>
      <p>Case studies show organizations typically achieve 5-15% reduction in operational costs following ISO 14001 implementation.</p>
      
      <h2>2. Regulatory Compliance</h2>
      <p>Benefits related to compliance include:</p>
      <ul>
        <li>Systematic approach to identifying legal requirements</li>
        <li>Reduced risk of non-compliance penalties</li>
        <li>Proactive adaptation to changing regulations</li>
        <li>Streamlined reporting to authorities</li>
        <li>Improved relationships with regulators</li>
      </ul>
      
      <h2>3. Enhanced Corporate Image</h2>
      <p>ISO 14001 certification demonstrates environmental commitment, resulting in:</p>
      <ul>
        <li>Improved brand reputation</li>
        <li>Enhanced stakeholder confidence</li>
        <li>Differentiation from competitors</li>
        <li>Stronger community relations</li>
        <li>Greater attractiveness to environmentally conscious customers</li>
      </ul>
      
      <h2>4. Market Access and Business Opportunities</h2>
      <p>Certification expands business potential through:</p>
      <ul>
        <li>Meeting supplier requirements for large corporations</li>
        <li>Qualification for government contracts</li>
        <li>Access to international markets</li>
        <li>Eligibility for sustainable procurement programs</li>
        <li>Partnership opportunities with environmentally conscious organizations</li>
      </ul>
      
      <h2>5. Risk Management</h2>
      <p>ISO 14001 helps organizations manage environmental risks by:</p>
      <ul>
        <li>Identifying potential environmental incidents</li>
        <li>Implementing preventive measures</li>
        <li>Developing emergency response procedures</li>
        <li>Reducing insurance premiums</li>
        <li>Minimizing potential liabilities</li>
      </ul>
      
      <h2>6. Employee Engagement</h2>
      <p>Environmental initiatives often lead to:</p>
      <ul>
        <li>Increased staff morale and motivation</li>
        <li>Greater sense of purpose</li>
        <li>Enhanced ability to attract and retain talent</li>
        <li>Improved workplace health and safety</li>
        <li>Development of problem-solving skills</li>
      </ul>
      
      <h2>7. Innovation and Continuous Improvement</h2>
      <p>The systematic approach to environmental management stimulates:</p>
      <ul>
        <li>Process innovation</li>
        <li>Product development with reduced environmental impact</li>
        <li>Technology upgrades</li>
        <li>Elimination of inefficiencies</li>
        <li>Cross-functional collaboration</li>
      </ul>
      
      <h2>Calculating Return on Investment</h2>
      <p>To determine ISO 14001 ROI, consider:</p>
      <ul>
        <li>Implementation costs (consulting, training, certification)</li>
        <li>Operational savings (energy, waste, materials)</li>
        <li>Avoided costs (compliance penalties, incidents)</li>
        <li>Revenue increases from new markets</li>
        <li>Intangible benefits (reputation, employee engagement)</li>
      </ul>
      <p>Most organizations report positive ROI within 1-3 years of implementation.</p>
    `,
    author: "Estelle Fisher",
    date: "5 May 2025",
    readTime: "6 min",
    category: "Beginner",
    standard: "ISO 14001",
    imageSrc: "https://images.unsplash.com/photo-1535937236668-9277ec8900df?q=80&w=1200&auto=format&fit=crop"
  },
  "integrated-systems": {
    title: "Integrating Multiple ISO Management Systems",
    content: `
      <h2>The Case for Integration</h2>
      <p>Many organizations maintain multiple ISO management systems such as ISO 9001 (Quality), ISO 14001 (Environmental), and ISO 45001 (Occupational Health and Safety). Integrating these systems brings significant advantages including reduced documentation, streamlined processes, and more efficient use of resources.</p>
      
      <h2>Understanding the Integrated Management System (IMS)</h2>
      <p>An Integrated Management System combines multiple management systems into a cohesive framework with:</p>
      <ul>
        <li>Unified policy and objectives</li>
        <li>Consolidated documentation</li>
        <li>Harmonized processes</li>
        <li>Coordinated auditing</li>
        <li>Integrated management reviews</li>
      </ul>
      
      <h2>Integration Foundation: The High-Level Structure (HLS)</h2>
      <p>ISO's High-Level Structure provides the common framework for management system standards with identical:</p>
      <ul>
        <li>Core text</li>
        <li>Terms and definitions</li>
        <li>Clause structure</li>
      </ul>
      <p>The HLS includes 10 clauses with clauses 4-10 containing requirements:</p>
      <ol>
        <li>Scope</li>
        <li>Normative references</li>
        <li>Terms and definitions</li>
        <li>Context of the organization</li>
        <li>Leadership</li>
        <li>Planning</li>
        <li>Support</li>
        <li>Operation</li>
        <li>Performance evaluation</li>
        <li>Improvement</li>
      </ol>
      
      <h2>Integration Approaches</h2>
      <h3>1. Phased Integration</h3>
      <p>Starting with a base standard (typically ISO 9001) and gradually incorporating other standards:</p>
      <ul>
        <li>Implement and stabilize one system</li>
        <li>Identify common elements with next standard</li>
        <li>Extend existing system to cover new requirements</li>
        <li>Continue until all standards are integrated</li>
      </ul>
      
      <h3>2. Simultaneous Integration</h3>
      <p>Implementing multiple standards concurrently:</p>
      <ul>
        <li>Develop an integrated framework from the start</li>
        <li>Address all standards' requirements in parallel</li>
        <li>Create consolidated documentation</li>
        <li>Implement across all areas simultaneously</li>
      </ul>
      
      <h3>3. All-at-Once Method</h3>
      <p>For organizations with no existing management systems:</p>
      <ul>
        <li>Design an integrated system from scratch</li>
        <li>Develop documentation to meet all standards</li>
        <li>Implement the complete system</li>
      </ul>
      
      <h2>Common Elements for Integration</h2>
      <p>Key components that can be integrated across systems:</p>
      <ul>
        <li>Management system manual</li>
        <li>Policy statements</li>
        <li>Process maps</li>
        <li>Document control procedures</li>
        <li>Training processes</li>
        <li>Internal audit program</li>
        <li>Corrective action procedures</li>
        <li>Management review</li>
        <li>Communication processes</li>
        <li>Risk assessment methodology</li>
      </ul>
      
      <h2>Integration Challenges and Solutions</h2>
      <table>
        <tr>
          <th>Challenge</th>
          <th>Solution</th>
        </tr>
        <tr>
          <td>Different department ownership</td>
          <td>Create cross-functional teams with clear responsibilities</td>
        </tr>
        <tr>
          <td>Varying levels of system maturity</td>
          <td>Focus on bringing less mature systems up to speed</td>
        </tr>
        <tr>
          <td>Standard-specific terminology</td>
          <td>Develop a common glossary for the organization</td>
        </tr>
        <tr>
          <td>Complex documentation</td>
          <td>Use tiered documentation with common core procedures</td>
        </tr>
        <tr>
          <td>Resistance to change</td>
          <td>Communicate benefits and provide targeted training</td>
        </tr>
      </table>
      
      <h2>Implementation Roadmap</h2>
      <ol>
        <li>Gap analysis against all applicable standards</li>
        <li>Integration planning</li>
        <li>Leadership commitment and resource allocation</li>
        <li>Process mapping and integration</li>
        <li>Development of integrated documentation</li>
        <li>Implementation of integrated processes</li>
        <li>Training on the integrated system</li>
        <li>Internal auditing</li>
        <li>Management review</li>
        <li>Certification audit</li>
      </ol>
      
      <h2>Measuring Integration Success</h2>
      <p>Key performance indicators for integration:</p>
      <ul>
        <li>Reduction in documentation volume</li>
        <li>Decrease in management time spent on system administration</li>
        <li>Audit time reduction</li>
        <li>Increased employee engagement with systems</li>
        <li>Enhanced operational performance</li>
      </ul>
    `,
    author: "Sebastian Fisher",
    date: "28 May 2025",
    readTime: "15 min",
    category: "Advanced",
    standard: "Multiple",
    imageSrc: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop"
  },
  "iso27001-controls": {
    title: "Understanding ISO 27001 Security Controls",
    content: `
      <h2>Introduction to ISO 27001 Controls</h2>
      <p>ISO 27001 is structured around a set of security controls that organizations implement to protect information assets. These controls form the core of an effective Information Security Management System (ISMS) and address a wide range of security domains.</p>
      
      <h2>The Evolution of ISO 27001 Controls</h2>
      <p>The 2022 revision (ISO 27001:2022) updated the control structure significantly from the previous 2013 version:</p>
      <ul>
        <li>Controls increased from 114 to 93 (but with broader scope)</li>
        <li>Reorganized from 14 to 4 main sections</li>
        <li>Enhanced focus on modern security challenges</li>
        <li>Improved alignment with other security frameworks</li>
      </ul>
      
      <h2>ISO 27001:2022 Control Structure</h2>
      <p>The new structure organizes controls into these four themes:</p>
      <ol>
        <li><strong>Organizational Controls (37 controls)</strong>: Governance framework for information security</li>
        <li><strong>People Controls (8 controls)</strong>: Human aspects of information security</li>
        <li><strong>Physical Controls (14 controls)</strong>: Security of physical environments and equipment</li>
        <li><strong>Technological Controls (34 controls)</strong>: Technical measures to protect information</li>
      </ol>
      
      <h2>Key Control Categories</h2>
      
      <h3>Organizational Controls:</h3>
      <ul>
        <li>Information security policies</li>
        <li>Risk management</li>
        <li>Security roles and responsibilities</li>
        <li>Supplier relationships</li>
        <li>Incident management</li>
        <li>Business continuity</li>
        <li>Compliance management</li>
      </ul>
      
      <h3>People Controls:</h3>
      <ul>
        <li>Security screening</li>
        <li>Terms and conditions of employment</li>
        <li>Security awareness and training</li>
        <li>Disciplinary process</li>
        <li>Responsibilities after termination</li>
      </ul>
      
      <h3>Physical Controls:</h3>
      <ul>
        <li>Physical security perimeters</li>
        <li>Secure areas</li>
        <li>Equipment security</li>
        <li>Secure disposal</li>
        <li>Clear desk/clear screen</li>
      </ul>
      
      <h3>Technological Controls:</h3>
      <ul>
        <li>User access management</li>
        <li>Cryptography</li>
        <li>Network security</li>
        <li>System security</li>
        <li>Application security</li>
        <li>Secure development</li>
        <li>Vulnerability management</li>
      </ul>
      
      <h2>New and Enhanced Controls in ISO 27001:2022</h2>
      <p>The 2022 revision introduced several new controls addressing emerging security challenges:</p>
      <ul>
        <li>Threat intelligence</li>
        <li>Cloud security</li>
        <li>ICT readiness for business continuity</li>
        <li>Physical and environmental security for cloud services</li>
        <li>Data leakage prevention</li>
        <li>Monitoring activities</li>
        <li>Configuration management</li>
        <li>Information deletion</li>
      </ul>
      
      <h2>The Control Selection Process</h2>
      <p>Organizations should follow these steps when selecting controls:</p>
      <ol>
        <li>Conduct risk assessment to identify information security risks</li>
        <li>Determine control objectives based on identified risks</li>
        <li>Select controls from Annex A that address these objectives</li>
        <li>Consider additional controls beyond Annex A if needed</li>
        <li>Document the selection and justification in a Statement of Applicability (SoA)</li>
        <li>Design control implementation details</li>
      </ol>
      
      <h2>Statement of Applicability (SoA)</h2>
      <p>The SoA is a crucial document that:</p>
      <ul>
        <li>Lists all Annex A controls</li>
        <li>Indicates which controls are implemented</li>
        <li>Provides justification for exclusions</li>
        <li>Links controls to identified risks</li>
        <li>Describes implementation methods</li>
      </ul>
      
      <h2>Control Implementation Considerations</h2>
      <p>When implementing controls, organizations should:</p>
      <ul>
        <li>Take a risk-based approach to implementation</li>
        <li>Consider organizational context and constraints</li>
        <li>Balance security requirements with operational needs</li>
        <li>Document implementation details</li>
        <li>Measure control effectiveness</li>
        <li>Continuously review and improve controls</li>
      </ul>
      
      <h2>Common Implementation Challenges</h2>
      <p>Organizations often face these challenges with ISO 27001 controls:</p>
      <ul>
        <li>Securing leadership commitment</li>
        <li>Resource constraints</li>
        <li>Technical complexity</li>
        <li>User resistance</li>
        <li>Measuring effectiveness</li>
        <li>Maintaining controls over time</li>
      </ul>
    `,
    author: "Estelle Fisher",
    date: "12 June 2025",
    readTime: "10 min",
    category: "Intermediate",
    standard: "ISO 27001",
    imageSrc: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop"
  },
  "iso22000-haccp": {
    title: "HACCP Principles in ISO 22000",
    content: `
      <h2>Understanding HACCP in the Context of ISO 22000</h2>
      <p>Hazard Analysis and Critical Control Points (HACCP) is a systematic preventive approach to food safety that addresses physical, chemical, and biological hazards as a means of prevention rather than finished product inspection. ISO 22000 incorporates HACCP principles as a core component of its food safety management system framework.</p>
      
      <h2>The Seven HACCP Principles</h2>
      <p>ISO 22000 requires the implementation of all seven HACCP principles:</p>
      
      <h3>Principle 1: Conduct a Hazard Analysis</h3>
      <p>The first step involves identifying and evaluating potential hazards associated with food production at all stages, from raw materials to consumption:</p>
      <ul>
        <li>Biological hazards (bacteria, viruses, parasites)</li>
        <li>Chemical hazards (cleaning agents, pesticides, allergens)</li>
        <li>Physical hazards (glass, metal, plastic, bone fragments)</li>
      </ul>
      <p>ISO 22000 expands the traditional hazard analysis by requiring consideration of:</p>
      <ul>
        <li>Likelihood of hazard occurrence</li>
        <li>Severity of adverse health effects</li>
        <li>Survival or multiplication of microorganisms</li>
        <li>Production or persistence of toxins, chemicals, or physical agents</li>
      </ul>
      
      <h3>Principle 2: Determine Critical Control Points (CCPs)</h3>
      <p>Critical Control Points are specific points, steps, or procedures where control can be applied to prevent, eliminate, or reduce a food safety hazard to an acceptable level.</p>
      <p>ISO 22000 uses a decision tree approach to identify CCPs, asking questions such as:</p>
      <ul>
        <li>Can preventive measures be applied at this step?</li>
        <li>Is this step specifically designed to eliminate or reduce a hazard?</li>
        <li>Could contamination occur at unacceptable levels?</li>
        <li>Will a subsequent step eliminate or reduce the hazard?</li>
      </ul>
      
      <h3>Principle 3: Establish Critical Limits</h3>
      <p>For each CCP, critical limits must be established to differentiate between safe and unsafe operating conditions:</p>
      <ul>
        <li>Temperature limits (minimum/maximum)</li>
        <li>Time limits (minimum/maximum)</li>
        <li>pH levels</li>
        <li>Water activity levels</li>
        <li>Available chlorine levels</li>
        <li>Sensory parameters (visual appearance, texture)</li>
      </ul>
      <p>ISO 22000 requires that critical limits be measurable and based on scientific evidence.</p>
      
      <h3>Principle 4: Establish Monitoring Procedures</h3>
      <p>Monitoring involves scheduled measurements to assess whether a CCP is under control:</p>
      <ul>
        <li>What will be monitored?</li>
        <li>How will it be monitored?</li>
        <li>When and how frequently?</li>
        <li>Who is responsible?</li>
      </ul>
      <p>ISO 22000 emphasizes real-time monitoring that provides timely results to allow for immediate corrective actions.</p>
      
      <h3>Principle 5: Establish Corrective Actions</h3>
      <p>Specific actions must be developed for each CCP to deal with deviations when they occur:</p>
      <ul>
        <li>Steps to regain control of the process</li>
        <li>Identification of affected product</li>
        <li>Determination of product disposition</li>
        <li>Investigation of cause</li>
        <li>Preventive measures</li>
        <li>Documentation of actions taken</li>
      </ul>
      
      <h3>Principle 6: Establish Verification Procedures</h3>
      <p>Verification confirms that the HACCP system is working effectively through:</p>
      <ul>
        <li>Validation of critical limits</li>
        <li>Review of monitoring records</li>
        <li>System audits</li>
        <li>Testing of equipment calibration</li>
        <li>Product testing</li>
      </ul>
      <p>ISO 22000 requires both validation (proving the control measures are capable of achieving intended control) and verification (confirming that requirements are fulfilled).</p>
      
      <h3>Principle 7: Establish Record-Keeping and Documentation Procedures</h3>
      <p>Documentation required includes:</p>
      <ul>
        <li>HACCP plan with hazards, CCPs, critical limits, monitoring, and corrective actions</li>
        <li>Monitoring records</li>
        <li>Deviation and corrective action records</li>
        <li>Verification activities</li>
        <li>Modifications to the HACCP system</li>
      </ul>
      
      <h2>Integration of HACCP Within ISO 22000</h2>
      <p>ISO 22000 integrates HACCP with:</p>
      <ul>
        <li><strong>Interactive Communication:</strong> Internal and external communication throughout the food chain</li>
        <li><strong>System Management:</strong> Structured management system with documented policies and procedures</li>
        <li><strong>Prerequisite Programs (PRPs):</strong> Basic conditions and activities necessary to maintain a hygienic environment</li>
        <li><strong>Operational Prerequisite Programs (OPRPs):</strong> Control measures identified by hazard analysis as necessary to control identified hazards but not managed through CCPs</li>
      </ul>
      
      <h2>HACCP Plan Development in ISO 22000</h2>
      <p>Steps for developing a HACCP plan within an ISO 22000 framework:</p>
      <ol>
        <li>Assemble a multidisciplinary food safety team</li>
        <li>Describe the product and its intended use</li>
        <li>Construct process flow diagrams</li>
        <li>Verify flow diagrams on-site</li>
        <li>Conduct hazard analysis</li>
        <li>Determine CCPs and OPRPs</li>
        <li>Establish monitoring systems</li>
        <li>Establish corrective actions</li>
        <li>Verify the system</li>
        <li>Maintain documentation</li>
      </ol>
      
      <h2>Common Challenges in HACCP Implementation</h2>
      <ul>
        <li>Distinguishing between CCPs and OPRPs</li>
        <li>Setting scientifically valid critical limits</li>
        <li>Developing effective monitoring systems</li>
        <li>Resource constraints for small businesses</li>
        <li>Maintaining a dynamic system that evolves with changing processes</li>
      </ul>
      
      <h2>Benefits of Effective HACCP Integration</h2>
      <ul>
        <li>Systematic approach to food safety hazard control</li>
        <li>Resource optimization by focusing on critical areas</li>
        <li>Rapid response to deviations</li>
        <li>Documented evidence of food safety control</li>
        <li>Improved regulatory compliance</li>
        <li>Enhanced consumer confidence</li>
      </ul>
    `,
    author: "Sebastian Fisher",
    date: "15 April 2025",
    readTime: "11 min",
    category: "Intermediate",
    standard: "ISO 22000",
    imageSrc: "https://images.unsplash.com/photo-1615866031617-a6e144b7a587?q=80&w=1200&auto=format&fit=crop"
  },
  "iso22000-prps": {
    title: "Prerequisite Programs for ISO 22000",
    content: `
      <h2>The Foundation of Food Safety: Prerequisite Programs</h2>
      <p>Prerequisite Programs (PRPs) are the fundamental conditions and activities necessary to maintain a hygienic environment throughout the food chain. In ISO 22000, they form the essential foundation upon which an effective Food Safety Management System (FSMS) is built.</p>
      
      <h2>The Role of PRPs in ISO 22000</h2>
      <p>Within the ISO 22000 framework, PRPs serve several crucial functions:</p>
      <ul>
        <li>Control basic environmental and operational conditions</li>
        <li>Reduce the likelihood of introducing hazards through the work environment</li>
        <li>Reduce biological, chemical, and physical contamination</li>
        <li>Support HACCP by managing basic hygiene factors</li>
        <li>Allow HACCP to focus on significant hazards requiring Critical Control Points</li>
      </ul>
      
      <h2>Types of Prerequisite Programs</h2>
      
      <h3>Basic PRPs (bPRPs)</h3>
      <p>These programs manage fundamental hygiene conditions and are typically based on:</p>
      <ul>
        <li>Good Manufacturing Practices (GMPs)</li>
        <li>Good Hygiene Practices (GHPs)</li>
        <li>Good Agricultural Practices (GAPs)</li>
        <li>Good Distribution Practices (GDPs)</li>
      </ul>
      
      <h3>Operational PRPs (oPRPs)</h3>
      <p>These are identified through hazard analysis as essential to control food safety hazards, but are not managed through Critical Control Points. They:</p>
      <ul>
        <li>Control likely hazard introduction points</li>
        <li>Require monitoring and record-keeping</li>
        <li>Need defined corrective actions</li>
        <li>Require verification activities</li>
      </ul>
      
      <h2>Essential Prerequisite Programs for ISO 22000</h2>
      
      <h3>1. Construction and Layout of Buildings</h3>
      <p>Requirements include:</p>
      <ul>
        <li>Appropriate location away from environmental contaminants</li>
        <li>Suitable building design to prevent pest entry</li>
        <li>Effective separation of processing areas</li>
        <li>Adequate space for equipment and operations</li>
        <li>Proper workflow design to prevent cross-contamination</li>
        <li>Appropriate interior structures (floors, walls, ceilings)</li>
      </ul>
      
      <h3>2. Premises and Workspace</h3>
      <p>Key aspects include:</p>
      <ul>
        <li>Segregation of processing areas based on contamination risk</li>
        <li>Designated changing facilities</li>
        <li>Adequate drainage systems</li>
        <li>Proper waste management facilities</li>
        <li>Controlled access to production areas</li>
      </ul>
      
      <h3>3. Utilities – Air, Water, Energy</h3>
      <p>Requirements for:</p>
      <ul>
        <li>Potable water supply and testing</li>
        <li>Water treatment systems if needed</li>
        <li>Air quality and ventilation</li>
        <li>Lighting appropriate for operations</li>
        <li>Backup systems for critical utilities</li>
      </ul>
      
      <h3>4. Waste Disposal</h3>
      <p>Systems for:</p>
      <ul>
        <li>Segregation of different waste types</li>
        <li>Waste container management</li>
        <li>Licensed waste contractors</li>
        <li>Drainage and effluent treatment</li>
        <li>Prevention of waste accumulation in processing areas</li>
      </ul>
      
      <h3>5. Equipment Suitability and Maintenance</h3>
      <p>Requirements include:</p>
      <ul>
        <li>Food-grade equipment design and materials</li>
        <li>Accessible for cleaning and inspection</li>
        <li>Preventive maintenance programs</li>
        <li>Calibration of monitoring equipment</li>
        <li>Equipment repair procedures</li>
      </ul>
      
      <h3>6. Management of Purchased Materials</h3>
      <p>Controls for:</p>
      <ul>
        <li>Supplier evaluation and approval</li>
        <li>Material specifications</li>
        <li>Incoming material inspection</li>
        <li>Storage conditions for raw materials</li>
        <li>Inventory rotation (FIFO/FEFO)</li>
      </ul>
      
      <h3>7. Cleaning and Sanitizing</h3>
      <p>Systems for:</p>
      <ul>
        <li>Documented cleaning and sanitizing procedures</li>
        <li>Approved cleaning chemicals</li>
        <li>Cleaning equipment management</li>
        <li>Clean-in-place (CIP) systems</li>
        <li>Verification of cleaning effectiveness</li>
      </ul>
      
      <h3>8. Pest Control</h3>
      <p>Programs including:</p>
      <ul>
        <li>Integrated pest management approach</li>
        <li>Monitoring and trending of pest activity</li>
        <li>Physical barriers to prevent pest entry</li>
        <li>Approved pesticide usage</li>
        <li>Documentation of pest control activities</li>
      </ul>
      
      <h3>9. Personnel Hygiene</h3>
      <p>Requirements for:</p>
      <ul>
        <li>Health screening for food handlers</li>
        <li>Hand washing facilities and procedures</li>
        <li>Clean work wear and protective clothing</li>
        <li>Rules for eating, drinking, and smoking</li>
        <li>Visitor control procedures</li>
      </ul>
      
      <h3>10. Product Recall and Traceability</h3>
      <p>Systems for:</p>
      <ul>
        <li>Batch identification</li>
        <li>Traceability of materials throughout production</li>
        <li>Mock recall exercises</li>
        <li>Crisis management procedures</li>
        <li>Communication with authorities and consumers</li>
      </ul>
      
      <h3>11. Food Defense and Food Fraud</h3>
      <p>Modern PRPs now include:</p>
      <ul>
        <li>Vulnerability assessments</li>
        <li>Physical security measures</li>
        <li>Personnel security</li>
        <li>Raw material authenticity verification</li>
        <li>Tamper-evident packaging</li>
      </ul>
      
      <h2>Implementing PRPs in ISO 22000</h2>
      <p>Steps for effective PRP implementation:</p>
      <ol>
        <li>Identify applicable regulatory and industry requirements</li>
        <li>Conduct a gap analysis against current practices</li>
        <li>Develop appropriate programs with clear responsibilities</li>
        <li>Document procedures and monitoring requirements</li>
        <li>Train personnel on PRP requirements</li>
        <li>Implement monitoring systems</li>
        <li>Verify effectiveness through inspections and audits</li>
        <li>Continuously improve based on findings</li>
      </ol>
      
      <h2>PRP Documentation Requirements</h2>
      <p>ISO 22000 requires documentation of PRPs including:</p>
      <ul>
        <li>Program descriptions and objectives</li>
        <li>Monitoring procedures and frequencies</li>
        <li>Corrective action protocols</li>
        <li>Verification activities</li>
        <li>Records of monitoring and corrective actions</li>
      </ul>
      
      <h2>Common Challenges in PRP Implementation</h2>
      <ul>
        <li>Insufficient resources for comprehensive programs</li>
        <li>Inadequate training of personnel</li>
        <li>Lack of management commitment</li>
        <li>Difficulty maintaining programs over time</li>
        <li>Balancing documentation requirements with practical application</li>
      </ul>
      
      <h2>Benefits of Effective PRP Systems</h2>
      <ul>
        <li>Simplified HACCP system by reducing the number of CCPs</li>
        <li>Consistent product safety and quality</li>
        <li>Efficient use of resources</li>
        <li>Reduced risk of product recalls</li>
        <li>Enhanced regulatory compliance</li>
        <li>Improved operational efficiency</li>
      </ul>
    `,
    author: "Estelle Fisher",
    date: "10 April 2025",
    readTime: "7 min",
    category: "Beginner",
    standard: "ISO 22000",
    imageSrc: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1200&auto=format&fit=crop"
  }
};

const ArticleDetails = () => {
  const { id } = useParams();
  const article = id ? articles[id as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/knowledge">Return to Knowledge Center</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/knowledge" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Knowledge Center
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="rounded-lg overflow-hidden mb-6 h-64">
            <LazyImage 
              src={article.imageSrc} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Book className="h-4 w-4" />
              <span>{article.readTime} read</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.standard}</span>
            <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.category}</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our ISO experts can provide personalized guidance for your specific industry and needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/store">Browse ISO Documents</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetails;

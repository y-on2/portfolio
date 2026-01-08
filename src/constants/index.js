import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "Background",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Keep in Touch",
    },
];

const services = [{
        title: "Network Engineer",
        icon: web,
    },
    {
        title: "Reverse Enginee",
        icon: mobile,
    },
    {
        title: "Database Architect",
        icon: backend,
    },
    {
        title: "Security Analyst",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Malware Research Lead ",
        company_name: "FedMal-QBD Initiative(Academic Project)",
        icon: tesla, // Replace with a security icon import
        iconBg: "#E6DEDD",
        date: "May 2024",
        points: [
            "Developed a hybrid detection framework using Federated AI and Quantum-Based Deep Learning (QBD).",
            "Analyzed malware behaviors and attack vectors to enhance detection accuracy and threat isolation.",
            "Authored technical assessments and vulnerability reports to document security findings.",
        ],
    },
    {
        title: "Security Software Engineer",
        company_name: "Security Tool Developer LOGY and Advanced WAF",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2025",
        points: [
            "Engineered a Flask WAF to proactively mitigate OWASP Top 10 vulnerabilities",
            "Building secure Flutter based NIDS console featuring real time alerts and offline data caching.",
            "Developed robust monitoring solutions to enhance network visibility and threat response.",
        ],
    },
    {
        title: "Ethical Hacking and Simulation",
        company_name: "Offensive Security Simulator CyberSafe Academy",
        icon: meta,
        iconBg: "#383E56",
        date: "July 2025",
        points: [
            "Developed a Flask based security platform to simulate phishing attacks and evaluate organizational resilience.",
            "Utilized Burp Suite and ethical hacking tools to track employee awareness and identify social engineering risks.",
            "Formulated mitigation strategies to strengthen human centric defenses against credential harvesting and exploitation.",
        ],
    },
];
const testimonials = [{
        testimonial: "Developed an advanced malware research framework by integrating Federated AI with Quantum Based Deep Learning (QBD) to revolutionize behavior based threat analysis.",
        name: "FedMal-QBD Initiative",
        designation: "Research Lead",
        company: "Academic Project.",
    },
    {
        testimonial: "Demonstrated technical excellence in network segmentation and firewall implementation, leveraging CCNA expertise and Nmap enumeration to harden enterprise infrastructures.",
        name: "Network Security Operations",
        designation: "Security Analyst",
        company: "Cisco Certified (CCNA)",

    },
    {
        testimonial: "Engineered a custom Python Flask Web Application Firewall (WAF) and a secure Flutter NIDS console, implementing role-based access control to ensure application integrity.",
        name: "LOGY and Advanced WAF",
        designation: "Security Tool Developer",
        company: "Software Defense Systems",
    },
];

const projects = [{
        name: "FedMal-QBD Framework",
        description: "Researched a malware detection framework combining Federated AI and Quantum-Based Deep Learning (QBD) for behavior-based threat analysis.",
        tags: [{
                name: "MalwareAnalysis",
                color: "blue-text-gradient",
            },
            {
                name: "QuantumDeepLearning",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "LOGY NIDS Console",
        description: "Built a secure Flutter-based Network Intrusion Detection System (NIDS) console with real-time alerts, role-based access, and offline data caching.",
        tags: [{
                name: "NIDS",
                color: "blue-text-gradient",
            },
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "NetworkSecurity",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "CyberSafe Academy",
        description: "Developed a Flask security training platform simulating phishing attacks to track employee awareness and improve incident response readiness.",
        tags: [{
                name: "EthicalHacking",
                color: "blue-text-gradient",
            },
            {
                name: "PhishingSimulation",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
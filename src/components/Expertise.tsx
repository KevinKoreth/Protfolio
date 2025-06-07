import React, { useEffect, useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import AIiconLight from "../assets/icons/artificial-intelligence.png";
import AIiconDark from "../assets/icons/artificial-intelligence_dark.png";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faCloud, faUser, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "FastAPI",
    "Django",
    "ETL",
    "HTML5",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "MongoDB",
    "Redis",
    "OAuth 2.0",
    "REST APIs",
    "Azure",
    "AWS",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
    "LLM Guardrails (Open-source)",
    "Azure Content Filter",
];
const devOpsLabels = [
    'AWS',
    'Azure',
    'Kubernetes',
    'Docker',
    'Terraform',
    'CI/CD',
    'Linux',
    'API Gateway',
    'Lambda',
    'ECS',
    'ECR',
    'EC2',
    'CloudFormation',
    'Jenkins',
    'Prometheus/Grafana',
    'Ansible',
    'GitHub Actions',
    'Disaster Recovery'
];
const leadershipLabels = [
    'Technical Mentoring',
    'Code Reviews',
    'Knowledge Transfer',
    'Stakeholder Communication',
    'Team Development',
    'Best Practices Advocacy',
    'Agile Collaboration',
    'Project Documentation',
    'Process Improvement',
];
const innovationLabels = [
    'Reverse Engineering',
    'Debugging Complex Systems',
    'Technical Research',
    'Solution Architecture',
    'Emerging Tech Adoption',
    'Process Automation',
    'Troubleshooting',
    'AI Integration',
    'Technical Documentation'
];


function Expertise() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const match = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(match.matches);
        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        match.addEventListener("change", handler);
        return () => match.removeEventListener("change", handler);
    }, []);
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <FontAwesomeIcon icon={faComputer} size="3x" />
                            <FontAwesomeIcon icon={faPython} size="3x" />
                        </span>
                        <h3>Software Development</h3>
                        <p>I specialize in building and optimizing Python based backend systems, including ETL pipelines, secure applications, and chatbot integrations. My experience includes modernizing legacy systems, implementing security compliance, and developing cloud-native solutions for Azure and AWS environments.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <FontAwesomeIcon icon={faDocker} size="3x" />
                            <FontAwesomeIcon icon={faLinux} size="3x" />
                        </span>
                        <h3>DevOps & Automation</h3>
                        <p> I have extensive experience in containerization and orchestration, particularly with Docker and Kubernetes. My skills include:
                            Crafting optimized, secure, and minimal Dockerfiles (e.g., multi-stage builds to reduce image size).
                            Selecting appropriate base images (e.g., Alpine Linux for lightweight deployments).
                            Managing dependencies, environment variables, and entry points.
                            Reducing attack surfaces by removing unnecessary packages.
                            Implementing health checks and logging strategies.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        {/* <FontAwesomeIcon icon={faPython} size="3x" /> */}
                        <img
                            src={isDarkMode ? AIiconLight : AIiconDark}
                            alt="Artificial Intelligence Icon"
                            style={{ width: "49px", height: "49px" }}
                        />
                        <h3>AI/ML Engineering & Security</h3>
                        <p>As an AI/ML Engineer, I have designed and implemented secure AI architectures, ensuring compliance with safety standards like HIPAA and GDPR. My expertise includes building AI solutions using Python, managing model risks, and integrating AI into applications.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faCloud} size="3x" />
                        <h3>DevOps & Cloud Engineering</h3>
                        <p>
                            I architect and maintain robust cloud infrastructure on AWS and Azure, implementing CI/CD pipelines,
                            container orchestration, and infrastructure-as-code solutions. My focus is on building scalable,
                            secure systems with automated monitoring and disaster recovery.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {devOpsLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faUser} size="3x" />
                        <h3>Leadership & Collaboration</h3>
                        <p>
                            I bridge technical execution with team success through mentorship, knowledge sharing, and stakeholder alignment.
                            My approach combines technical guidance with clear communication to drive projects forward while fostering
                            growth in cross-functional teams.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Key strengths:</span>
                            {leadershipLabels.map((label, index) => (
                                <Chip key={index} className='chip leadership-chip' label={label} />
                            ))}
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faLightbulb} size="3x" />
                        <h3>Problem Solving & Innovation</h3>
                        <p>
                            I thrive on tackling complex technical challenges through creative solutions and systematic debugging.
                            My approach combines reverse engineering, performance optimization, and emerging technology adoption
                            to transform obstacles into opportunities for innovation.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Key abilities:</span>
                            {innovationLabels.map((label, index) => (
                                <Chip key={index} className='chip innovation-chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
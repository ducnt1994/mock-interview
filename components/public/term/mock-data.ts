import { Shield, Database, Users, RefreshCw, BookOpen, Mail } from "lucide-react";

export const sidebarLinks = [
    { id: "introduction", label: "Introduction", icon: Shield },
    { id: "data-protection", label: "Data Protection", icon: Database },
    { id: "user-obligations", label: "User Obligations", icon: Users },
    { id: "refund-policy", label: "Refund Policy", icon: RefreshCw },
    { id: "intellectual-property", label: "Intellectual Property", icon: BookOpen },
    { id: "contact-us", label: "Contact Us", icon: Mail },
];

export const termsSections = [
    {
        id: "introduction",
        number: 1,
        title: "Introduction",
        content: [
            {
                type: "text",
                value:
                    'Welcome to InterviewPrep. These Terms of Service and Privacy Policy ("Terms") govern your use of our website and services that connect interviewees with professional interviewers. By using our platform, you agree to be bound by these terms.',
            },
            {
                type: "text",
                value:
                    "InterviewPrep provides a marketplace for simulated professional interviews, feedback sessions, and career coaching. Our goal is to ensure a safe, professional, and productive environment for all users.",
            },
        ],
    },
    {
        id: "data-protection",
        number: 2,
        title: "Data Protection",
        content: [
            {
                type: "text",
                value:
                    "Your privacy is paramount. We collect only the information necessary to provide our services and improve your experience.",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Personal Identification:",
                        text: "We store your name, email address, and professional background provided during registration.",
                    },
                    {
                        bold: "Session Recordings:",
                        text: "Mock interviews may be recorded for feedback purposes. You have control over whether these are saved or deleted.",
                    },
                    {
                        bold: "Payment Information:",
                        text: "All financial transactions are handled by secure, third-party processors. We do not store full credit card details on our servers.",
                    },
                ],
            },
            {
                type: "highlight",
                value:
                    "We will never sell your personal data to third parties for marketing purposes. Your data is used strictly for the facilitation of mock interviews and service optimization.",
            },
        ],
    },
    {
        id: "user-obligations",
        number: 3,
        title: "User Obligations",
        content: [
            {
                type: "text",
                value: "To maintain the quality of our community, users agree to:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Professional Conduct:",
                        text: "Treat all platform participants with respect and professional courtesy. Harassment or discriminatory behavior will result in immediate termination of access.",
                    },
                    {
                        bold: "Accurate Information:",
                        text: "Provide truthful information regarding qualifications, experience, and identity.",
                    },
                    {
                        bold: "Confidentiality:",
                        text: "Respect the confidentiality of feedback and proprietary interview questions shared during sessions.",
                    },
                ],
            },
        ],
    },
    {
        id: "refund-policy",
        number: 4,
        title: "Refund Policy",
        content: [
            {
                type: "text",
                value:
                    "We strive for excellence, but we understand things don't always go as planned.",
            },
            {
                type: "cards",
                items: [
                    {
                        title: "Cancellations",
                        text: "Full refund for cancellations made 24 hours or more before the scheduled session.",
                    },
                    {
                        title: "Technical Issues",
                        text: "Full credit or reschedule if platform issues prevent the session from occurring.",
                    },
                ],
            },
        ],
    },
    {
        id: "intellectual-property",
        number: 5,
        title: "Intellectual Property",
        content: [
            {
                type: "text",
                value:
                    "All content on InterviewPrep, including but not limited to the logo, design, text, graphics, and software, is the property of InterviewPrep and protected by international copyright laws. Users are granted a limited, non-exclusive license to access the platform for personal use only.",
            },
        ],
    },
    {
        id: "contact-us",
        number: 6,
        title: "Contact Us",
        content: [
            {
                type: "text",
                value:
                    "If you have any questions about these Terms or our Privacy Policy, please reach out to our legal team.",
            },
            {
                type: "contact",
                items: [
                    {
                        label: "EMAIL",
                        value: "legal@interviewprep.com",
                        icon: "mail",
                    },
                    {
                        label: "SUPPORT",
                        value: "Help Center",
                        icon: "headphones",
                    },
                ],
            },
        ],
    },
];

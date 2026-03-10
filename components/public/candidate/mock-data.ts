import {
    Share2,
    GraduationCap,
    Code2,
    Users,
    Sparkles,
    HelpCircle,
    Bot,
} from "lucide-react";

export const quickActions = [
    { label: "Share interview experience", icon: Share2, color: "bg-primary-50 text-primary-600" },
    // { label: "Learn to ace SWE interviews", icon: GraduationCap, color: "bg-primary-50 text-primary-600" },
    { label: "Practice coding questions", icon: Code2, color: "bg-primary-50 text-primary-600" },
    { label: "Senior+ behavioral prep", icon: Users, color: "bg-amber-50 text-amber-600" },
    // { label: "Prep for AI companies", icon: Sparkles, color: "bg-rose-50 text-rose-600" },
    { label: "View interview questions", icon: HelpCircle, color: "bg-orange-50 text-orange-600" },
    { label: "Practice with an AI interviewer", icon: Bot, color: "bg-violet-50 text-violet-600" },
];

export const onboardingSteps = [
    { label: "Sign up for InterviewPrep", completed: true },
    { label: "Start your first course", completed: true },
    { label: "Explore interview questions", completed: true },
    { label: "Join a practice interview", completed: false, reward: "+10" },
    { label: "Book a coaching session", completed: false },
];

export const currentCourse = {
    title: "OpenAI Culture Guide",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    logos: ["🤖", "AI", "⚡", "XI", "🎯", "✨"],
};

export const progressItems = [
    { title: "AI Company Interview Experiences", status: "active" as const },
    { title: "System Design Fundamentals", status: "active" as const },
];

export const questionOfDay = {
    label: "QUESTION OF THE DAY",
    question: "How do you set priorities with limited resources?",
    description: "Answer a practice question to stay on top of your interview preparation.",
};

export const interviewQuestions = [
    {
        id: "q1",
        company: "Google",
        role: "Software Engineer",
        question: "Design a URL shortening service like bit.ly",
        difficulty: "Medium",
        tags: ["System Design", "Backend"],
    },
    {
        id: "q2",
        company: "Meta",
        role: "Frontend Engineer",
        question: "Implement a news feed with infinite scroll",
        difficulty: "Hard",
        tags: ["Frontend", "React"],
    },
    {
        id: "q3",
        company: "Amazon",
        role: "SDE II",
        question: "Find the longest palindrome substring",
        difficulty: "Medium",
        tags: ["Algorithms", "Strings"],
    },
    {
        id: "q4",
        company: "Stripe",
        role: "Backend Engineer",
        question: "Design a payment processing pipeline",
        difficulty: "Hard",
        tags: ["System Design", "Distributed Systems"],
    },
];

export const bookedInterviews = [
    {
        id: "b1",
        interviewer: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        role: "Senior SWE @ Google",
        specialty: "System Design",
        date: "Mar 12, 2026",
        time: "10:00 AM",
        status: "upcoming" as const,
    },
    {
        id: "b2",
        interviewer: "Sarah Kim",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        role: "Tech Lead @ Meta",
        specialty: "Behavioral",
        date: "Mar 15, 2026",
        time: "2:00 PM",
        status: "upcoming" as const,
    },
    {
        id: "b3",
        interviewer: "David Park",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        role: "Staff Engineer @ Amazon",
        specialty: "Coding",
        date: "Mar 8, 2026",
        time: "9:00 AM",
        status: "completed" as const,
    },
];

export const relatedInterviewers = [
    {
        id: "i1",
        name: "Emily Zhang",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        role: "Principal Engineer @ Netflix",
        specialty: "System Design",
        rating: 4.9,
        sessions: 234,
    },
    {
        id: "i2",
        name: "Michael Torres",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        role: "Engineering Manager @ Stripe",
        specialty: "Behavioral",
        rating: 4.8,
        sessions: 189,
    },
    {
        id: "i3",
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        role: "Senior SWE @ Apple",
        specialty: "Coding",
        rating: 5.0,
        sessions: 312,
    },
];

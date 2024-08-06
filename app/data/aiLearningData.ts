import { Brain, Target, Zap, Users, TrendingUp, Layers } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface AIFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AiLearningJourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export const aiFeatures: AIFeature[] = [
  {
    icon: Brain,
    title: "Personalized Learning Paths",
    description: "Our AI analyzes your learning style and adapts content to suit your needs."
  },
  {
    icon: Target,
    title: "Smart Goal Setting",
    description: "AI-powered system helps you set and achieve realistic learning goals."
  },
  {
    icon: Zap,
    title: "Real-time Feedback",
    description: "Instant, actionable feedback to help you improve continuously."
  },
  {
    icon: Users,
    title: "Collaborative AI",
    description: "Facilitates group learning and peer-to-peer interactions."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visualize your learning journey with AI-generated insights."
  },
  {
    icon: Layers,
    title: "Adaptive Content",
    description: "Content difficulty adjusts in real-time based on your performance."
  },
  
];

export const aiLearningJourney: AiLearningJourneyStep[] = [
  {
    icon: Brain,
    title: "AI Assessment",
    description: "Our AI evaluates your current knowledge and learning style."
  },
  {
    icon: Target,
    title: "Personalized Curriculum",
    description: "A tailored learning path is created just for you."
  },
  {
    icon: Zap,
    title: "Adaptive Learning",
    description: "Content adapts in real-time as you progress through your studies."
  },
  {
    icon: Users,
    title: "AI-Guided Collaboration",
    description: "Connect with peers and mentors based on AI recommendations."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "AI constantly refines your learning experience based on your progress."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "The AI-powered personalized learning path helped me master complex topics in half the time it would have taken me otherwise.",
    name: "Sarah Johnson",
    title: "Computer Science Student",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "As a teacher, the AI insights have revolutionized how I approach individual student needs. It's like having a super-smart teaching assistant!",
    name: "Michael Chen",
    title: "High School Math Teacher",
    avatar: "/avatars/michael.jpg"
  }
];
import { Brain, Heart, Focus, Zap, Battery, Smile } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MindfulnessPractice {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  steps: string[];
  tips: string[];
}

export const mindfulnessPractices: MindfulnessPractice[] = [
  {
    id: "breath-awareness",
    icon: Focus,
    title: "Breath Awareness",
    shortDescription: "Anchor your attention and improve focus through mindful breathing.",
    fullDescription: "Breath awareness is a fundamental mindfulness practice that helps calm the mind, reduce stress, and enhance concentration. By focusing on your breath, you create a strong foundation for other mindfulness techniques and improve your overall cognitive function.",
    benefits: [
      "Improved focus and concentration",
      "Reduced stress and anxiety",
      "Enhanced emotional regulation",
      "Increased self-awareness"
    ],
    steps: [
      "Find a comfortable seated position",
      "Close your eyes or maintain a soft gaze",
      "Breathe naturally and focus on the sensation of breath",
      "Notice when your mind wanders and gently return focus to the breath",
      "Start with 2-5 minutes and gradually increase duration"
    ],
    tips: [
      "Practice consistently, even if just for a few minutes daily",
      "Use this technique before study sessions to clear your mind",
      "Don't judge yourself when your mind wanders; it's a natural part of the process"
    ]
  },
  {
    id: "body-scan",
    icon: Zap,
    title: "Body Scan",
    shortDescription: "Enhance body awareness and release tension for improved learning readiness.",
    fullDescription: "The body scan is a powerful mindfulness technique that involves systematically focusing your attention on different parts of your body. This practice helps release physical tension, increases body awareness, and prepares your mind and body for focused learning.",
    benefits: [
      "Reduced physical tension and stress",
      "Improved mind-body connection",
      "Enhanced relaxation and sleep quality",
      "Increased present-moment awareness"
    ],
    steps: [
      "Lie down or sit comfortably",
      "Close your eyes and take a few deep breaths",
      "Slowly focus your attention on each part of your body, starting from your toes",
      "Notice any sensations without judgment",
      "Gradually move your attention up through your entire body"
    ],
    tips: [
      "Use this practice to unwind after long study sessions",
      "Try a body scan before bed to improve sleep quality",
      "Combine with visualization for a more immersive experience"
    ]
  },
  // Add more mindfulness practices here
];
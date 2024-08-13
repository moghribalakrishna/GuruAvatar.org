import React, { useState, useEffect, useRef, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TimelineOverview from './TimelineOverview';
import SingaporeEpiphany from './SingaporeEpiphany';
import LeapOfFaith from './LeapOfFaith';
import GuruAvatarConception from './GuruAvatarConception';
import AlienHuChapter from './AlienHuChapter';
import GuruAvatarReborn from './GuruAvatarReborn';
import FutureVision from './FutureVision';

interface Phase {
  id: string;
  year: number;
  title: string;
  component: React.ComponentType<{ isActive: boolean }>;
}

const journeyPhases: Phase[] = [
  { id: 'singapore', year: 2012, title: 'Singapore Epiphany', component: SingaporeEpiphany },
  { id: 'leap', year: 2013, title: 'Leap of Faith', component: LeapOfFaith },
  { id: 'conception', year: 2014, title: 'GuruAvatar Conception', component: GuruAvatarConception },
  { id: 'alienhu', year: 2016, title: 'AlienHu Chapter', component: AlienHuChapter },
  { id: 'reborn', year: 2023, title: 'GuruAvatar Reborn', component: GuruAvatarReborn },
  { id: 'future', year: 2024, title: 'Future Vision', component: FutureVision },
];

const GuruAvatarEvolution: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<Phase | null>(null);
  const [showOverview, setShowOverview] = useState(true);
  const sectionRefs = useRef<RefObject<HTMLElement>[]>(journeyPhases.map(() => React.createRef<HTMLElement>()));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sectionRefs.current.find((ref) => {
        const element = ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection && currentSection.current) {
        const newPhase = journeyPhases.find((phase) => phase.id === currentSection.current!.id);
        if (newPhase && newPhase.id !== currentPhase?.id) {
          setCurrentPhase(newPhase);
        }
      }

      setShowOverview(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPhase]);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <TimelineOverview currentPhase={currentPhase?.title} />
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <TimelineOverview currentPhase={currentPhase?.title} />
            <motion.div
              className="absolute bottom-10 text-white text-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <p className="mb-2">Scroll to begin the journey</p>
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {journeyPhases.map((phase, index) => (
        <section
          key={phase.id}
          id={phase.id}
          ref={sectionRefs.current[index]}
          className="min-h-screen flex items-center justify-center p-8"
        >
          <phase.component isActive={currentPhase?.id === phase.id} />
        </section>
      ))}
      <div className="fixed bottom-4 right-4 bg-white bg-opacity-20 p-2 rounded-full">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default GuruAvatarEvolution;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { markSectionComplete } from '../utils/storage';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  autoComplete?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
  autoComplete = false,
}) => {
  useEffect(() => {
    if (autoComplete) {
      const timer = setTimeout(() => {
        markSectionComplete(id);
      }, 3000); // Mark as complete after 3 seconds of viewing

      return () => clearTimeout(timer);
    }
  }, [id, autoComplete]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
      id={id}
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-6 pb-4 border-b-4 border-gradient-to-r from-purple-300 to-teal-300">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.section>
  );
};

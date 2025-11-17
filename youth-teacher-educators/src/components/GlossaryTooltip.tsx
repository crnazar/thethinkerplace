import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { glossaryTerms } from '../data/glossary';

interface GlossaryTooltipProps {
  term: string;
  children: React.ReactNode;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({ term, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const glossaryEntry = glossaryTerms.find(t => t.term.toLowerCase() === term.toLowerCase());

  if (!glossaryEntry) {
    return <>{children}</>;
  }

  return (
    <span className="relative inline-block">
      <span
        className="border-b-2 border-dotted border-teal-600 cursor-help text-teal-700 font-medium"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
      >
        {children}
      </span>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-72 p-4 mt-2 bg-teal-900 text-white rounded-lg shadow-xl left-0"
            style={{ top: '100%' }}
          >
            <h4 className="font-bold text-sm mb-2 text-yellow-300">{glossaryEntry.term}</h4>
            <p className="text-sm leading-relaxed">{glossaryEntry.definition}</p>
            {glossaryEntry.examples && glossaryEntry.examples.length > 0 && (
              <div className="mt-3 pt-3 border-t border-teal-700">
                <p className="text-xs font-semibold mb-1 text-yellow-200">Examples:</p>
                <ul className="text-xs space-y-1">
                  {glossaryEntry.examples.map((example, index) => (
                    <li key={index} className="pl-2">• {example}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

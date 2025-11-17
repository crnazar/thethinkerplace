import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { glossaryTerms } from '../data/glossary';
import { Sparkles } from 'lucide-react';

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
        className="border-b-2 border-dotted border-purple-500 cursor-help text-purple-700 font-semibold hover:text-purple-600 transition-colors"
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, type: 'spring' }}
            className="absolute z-50 w-80 p-5 mt-3 bg-gradient-to-br from-purple-600 to-teal-500 text-white rounded-2xl shadow-2xl left-0 border-2 border-white/20 backdrop-blur-sm"
            style={{ top: '100%' }}
          >
            <div className="flex items-center mb-3">
              <Sparkles className="w-4 h-4 text-teal-200 mr-2" />
              <h4 className="font-bold text-base text-white">{glossaryEntry.term}</h4>
            </div>
            <p className="text-sm leading-relaxed text-purple-50">{glossaryEntry.definition}</p>
            {glossaryEntry.examples && glossaryEntry.examples.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-xs font-semibold mb-2 text-teal-200">Examples:</p>
                <ul className="text-xs space-y-1.5 text-purple-100">
                  {glossaryEntry.examples.map((example, index) => (
                    <li key={index} className="pl-2 flex items-start">
                      <span className="text-teal-300 mr-2">→</span>
                      <span>{example}</span>
                    </li>
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

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  percentage: number;
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  showLabel = true,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white drop-shadow">Overall Progress</span>
          <span className="text-sm font-bold text-teal-200">{percentage}%</span>
        </div>
      )}
      <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-3 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-teal-400 via-teal-300 to-purple-400 rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

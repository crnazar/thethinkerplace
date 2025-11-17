import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  interactive = false,
  onClick,
}) => {
  const cardVariants = {
    hover: interactive ? {
      y: -6,
      boxShadow: '0 20px 40px rgba(124, 58, 237, 0.15), 0 10px 20px rgba(20, 184, 166, 0.1)'
    } : {},
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl shadow-lg border border-purple-100 p-7 backdrop-blur-sm ${
        interactive ? 'cursor-pointer hover:border-purple-300' : ''
      } ${className}`}
    >
      {title && (
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-5 pb-2 border-b-2 border-purple-200">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

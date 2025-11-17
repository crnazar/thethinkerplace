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
    hover: interactive ? { y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' } : {},
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md p-6 ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold text-teal-800 mb-4">{title}</h3>
      )}
      {children}
    </motion.div>
  );
};

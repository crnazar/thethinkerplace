import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tabs } from '../data/tabs';
import { ProgressBar } from './ProgressBar';
import { useProgress } from '../hooks/useProgress';
import { BookOpen, Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { completionPercentage } = useProgress();

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 shadow-2xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Logo */}
        <div className="flex items-center justify-between py-5 border-b border-purple-400/30">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BookOpen className="w-10 h-10 text-white drop-shadow-lg" />
              <Sparkles className="w-4 h-4 text-teal-200 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Youth as Teacher Educators
              </h1>
              <p className="text-sm text-purple-100">
                Learning to Teach with Youth Science & Engineering Practices
              </p>
            </div>
          </div>
          <div className="w-56">
            <ProgressBar percentage={completionPercentage} showLabel={true} />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 overflow-x-auto py-3 px-1">
          {tabs.map((tab) => {
            const isActive =
              tab.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(tab.path);

            return (
              <Link
                key={tab.id}
                to={tab.path}
                className="relative flex-shrink-0"
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-5 py-3 rounded-xl transition-all duration-300 shadow-lg ${
                    isActive
                      ? 'bg-white text-purple-700 font-bold shadow-xl'
                      : 'bg-purple-700/30 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <div className="font-medium text-sm whitespace-nowrap">
                    {tab.title}
                  </div>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

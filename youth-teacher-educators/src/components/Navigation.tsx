import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tabs } from '../data/tabs';
import { ProgressBar } from './ProgressBar';
import { useProgress } from '../hooks/useProgress';
import { BookOpen } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { completionPercentage } = useProgress();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Logo */}
        <div className="flex items-center justify-between py-4 border-b border-stone-200">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-teal-700" />
            <div>
              <h1 className="text-xl font-bold text-teal-800">
                Youth as Teacher Educators
              </h1>
              <p className="text-xs text-stone-600">
                Learning to Teach with Youth Science & Engineering Practices
              </p>
            </div>
          </div>
          <div className="w-48">
            <ProgressBar percentage={completionPercentage} showLabel={true} />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 overflow-x-auto py-2">
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
                  whileHover={{ y: -2 }}
                  className={`px-4 py-3 rounded-t-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-teal-700 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <div className="font-medium text-sm whitespace-nowrap">
                    {tab.title}
                  </div>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400"
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

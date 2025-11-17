import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { updateLastVisitedTab } from '../utils/storage';
import { tabs } from '../data/tabs';
import { Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const currentTab = tabs.find(
      (tab) =>
        tab.path === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(tab.path)
    );
    if (currentTab) {
      updateLastVisitedTab(currentTab.id);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-10">{children}</main>
      <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-teal-900 text-white mt-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Heart className="w-5 h-5 text-teal-300 mr-2 fill-current" />
              <p className="text-base font-medium">
                Based on research by Dr. Christina Restrepo Nazar and collaborators
              </p>
            </div>
            <p className="text-sm text-purple-200 mb-3">
              Nazar, C. R. (2018). <em>Youth as Teacher Educators: Supporting Preservice Teachers in Developing Youth-Centered, Equity-Oriented Science Teaching Practices.</em> Michigan State University.
            </p>
            <div className="border-t border-purple-600/30 pt-4 mt-4">
              <p className="text-xs text-purple-300">
                Winner of the 2020 AACTE Outstanding Dissertation Award
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

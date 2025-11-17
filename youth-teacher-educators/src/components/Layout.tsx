import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { updateLastVisitedTab } from '../utils/storage';
import { tabs } from '../data/tabs';

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
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      <footer className="bg-teal-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm mb-2">
              Based on research by Dr. Christina Restrepo Nazar and collaborators
            </p>
            <p className="text-xs text-teal-200">
              Nazar, C. R. (2018). <em>Youth as Teacher Educators: Supporting Preservice Teachers in Developing Youth-Centered, Equity-Oriented Science Teaching Practices.</em> Michigan State University.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

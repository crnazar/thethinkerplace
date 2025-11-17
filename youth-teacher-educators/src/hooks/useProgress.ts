import { useState, useEffect } from 'react';
import type { ProgressData } from '../types';
import { getProgress, saveProgress, getCompletionPercentage } from '../utils/storage';

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(getProgress());
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
    setCompletionPercentage(getCompletionPercentage());
  }, []);

  const updateProgress = (updates: Partial<ProgressData>) => {
    saveProgress(updates);
    const updated = getProgress();
    setProgress(updated);
    setCompletionPercentage(getCompletionPercentage());
  };

  return {
    progress,
    completionPercentage,
    updateProgress,
  };
};

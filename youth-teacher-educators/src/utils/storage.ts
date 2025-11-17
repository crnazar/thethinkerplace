import type { ProgressData, ReflectionEntry } from '../types';

const STORAGE_KEY = 'youth-teacher-educators-progress';

const getDefaultProgress = (): ProgressData => ({
  completedSections: [],
  bookmarkedResources: [],
  reflections: [],
  lastVisitedTab: 'theoretical-frameworks',
  startDate: new Date().toISOString(),
  lastAccessDate: new Date().toISOString(),
});

export const getProgress = (): ProgressData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return getDefaultProgress();
    return { ...getDefaultProgress(), ...JSON.parse(stored) };
  } catch (error) {
    console.error('Error reading progress from storage:', error);
    return getDefaultProgress();
  }
};

export const saveProgress = (progress: Partial<ProgressData>): void => {
  try {
    const current = getProgress();
    const updated = {
      ...current,
      ...progress,
      lastAccessDate: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving progress to storage:', error);
  }
};

export const markSectionComplete = (sectionId: string): void => {
  const progress = getProgress();
  if (!progress.completedSections.includes(sectionId)) {
    saveProgress({
      completedSections: [...progress.completedSections, sectionId],
    });
  }
};

export const toggleBookmark = (resourceId: string): void => {
  const progress = getProgress();
  const bookmarks = progress.bookmarkedResources.includes(resourceId)
    ? progress.bookmarkedResources.filter(id => id !== resourceId)
    : [...progress.bookmarkedResources, resourceId];

  saveProgress({ bookmarkedResources: bookmarks });
};

export const addReflection = (reflection: Omit<ReflectionEntry, 'id' | 'date'>): void => {
  const progress = getProgress();
  const newReflection: ReflectionEntry = {
    ...reflection,
    id: `reflection-${Date.now()}`,
    date: new Date().toISOString(),
  };
  saveProgress({
    reflections: [...progress.reflections, newReflection],
  });
};

export const updateLastVisitedTab = (tabId: string): void => {
  saveProgress({ lastVisitedTab: tabId });
};

export const getCompletionPercentage = (): number => {
  const progress = getProgress();
  const totalSections = 25; // Approximate total sections across all tabs
  return Math.round((progress.completedSections.length / totalSections) * 100);
};

export const clearProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
};

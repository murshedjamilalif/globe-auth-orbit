
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  problemCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  featured?: boolean;
}

export const dsaCourses: Course[] = [
  {
    id: 'dsa-300',
    title: 'AlgoMaster 300',
    description: 'Comprehensive course covering all essential DS&A patterns with 300 practice problems.',
    duration: '3+ Months',
    problemCount: 300,
    difficulty: 'hard',
    featured: true
  },
  {
    id: 'dsa-150',
    title: 'AlgoMaster 150',
    description: 'Mid-level course focusing on the most common patterns and interview questions.',
    duration: '1-3 Months',
    problemCount: 150,
    difficulty: 'medium'
  },
  {
    id: 'dsa-75',
    title: 'AlgoMaster 75',
    description: 'Quick crash course for interview preparation with must-know problems.',
    duration: '<1 Month',
    problemCount: 75,
    difficulty: 'easy'
  }
];

export const systemDesignCourses: Course[] = [
  {
    id: 'lld',
    title: 'Low Level Design',
    description: 'Learn object-oriented design patterns and build real-world system components.',
    duration: '4 Weeks',
    problemCount: 15,
    difficulty: 'medium',
    featured: true
  },
  {
    id: 'hld',
    title: 'High Level Design',
    description: 'Master system architecture design and scalability concepts.',
    duration: '6 Weeks',
    problemCount: 12,
    difficulty: 'hard'
  }
];

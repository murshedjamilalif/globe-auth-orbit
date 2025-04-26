
import React from 'react';
import { BookOpen, Filter, Search, Clock, Code, Grid, Link, ArrowRight } from 'lucide-react';

export interface Pattern {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  totalProblems: number;
}

export const dsaPatterns: Pattern[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    description: 'Master fundamental array operations and common array-based algorithms.',
    icon: React.createElement(Grid, { className: "h-5 w-5" }),
    totalProblems: 32
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Solve efficiency problems on arrays/strings with the sliding window technique.',
    icon: React.createElement(ArrowRight, { className: "h-5 w-5" }),
    totalProblems: 24
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Use two pointers to solve array and linked list problems efficiently.',
    icon: React.createElement(Link, { className: "h-5 w-5" }),
    totalProblems: 28
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Apply binary search algorithm to find elements in sorted collections.',
    icon: React.createElement(Search, { className: "h-5 w-5" }),
    totalProblems: 20
  },
  {
    id: 'dfs-bfs',
    name: 'DFS & BFS',
    description: 'Master depth-first and breadth-first search algorithms for graph traversal.',
    icon: React.createElement(BookOpen, { className: "h-5 w-5" }),
    totalProblems: 36
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Solve complex problems by breaking them down into simpler subproblems.',
    icon: React.createElement(Code, { className: "h-5 w-5" }),
    totalProblems: 45
  },
  {
    id: 'greedy',
    name: 'Greedy Algorithms',
    description: 'Make locally optimal choices at each stage to find global optimum.',
    icon: React.createElement(Clock, { className: "h-5 w-5" }),
    totalProblems: 18
  },
  {
    id: 'sorting-searching',
    name: 'Sorting & Searching',
    description: 'Implement and apply various sorting and searching algorithms.',
    icon: React.createElement(Filter, { className: "h-5 w-5" }),
    totalProblems: 22
  }
];

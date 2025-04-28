import { Code, BarChart3, GitMerge, Timer, Hash, Binary, Workflow, LineChart, Layers, SlidersHorizontal, Network, GitFork, File as FileTree, Server, FlaskConical } from 'lucide-react';
import React from 'react';

export const patternData = [
  {
    id: 'arrays',
    name: 'Arrays',
    icon: (): JSX.Element => Code({ size: 24, className: "text-teal-500" }),
    colorClass: 'bg-teal-500/20',
    progressColorClass: 'bg-teal-500 h-2 rounded-full',
    problemCount: 25,
    completedCount: 8,
    difficultyCount: { easy: 10, medium: 12, hard: 3 },
    description: 'Arrays are one of the most basic data structures in computer science. They store elements at contiguous memory locations, allowing for easy access using indices.',
    whenToUse: [
      'When you need to store a collection of items of the same type',
      'When you need O(1) access to elements by their index',
      'For implementing other data structures like stacks, queues, heaps, etc.',
      'When you need efficient iteration over elements'
    ],
    exampleProblems: [
      { id: '1', title: 'Two Sum', difficulty: 'Easy', completed: true },
      { id: '2', title: 'Move Zeroes', difficulty: 'Easy', completed: false },
      { id: '7', title: 'Product of Array Except Self', difficulty: 'Medium', completed: true },
      { id: '10', title: 'First Missing Positive', difficulty: 'Hard', completed: false }
    ]
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    icon: (): JSX.Element => GitMerge({ size: 24, className: "text-blue-500" }),
    colorClass: 'bg-blue-500/20',
    progressColorClass: 'bg-blue-500 h-2 rounded-full',
    problemCount: 18,
    completedCount: 5,
    difficultyCount: { easy: 8, medium: 8, hard: 2 },
    description: 'The two-pointer technique uses two pointers that either move toward each other (from both ends) or in the same direction at different speeds to solve problems with less time complexity.',
    whenToUse: [
      'When dealing with sorted arrays or linked lists',
      'For problems requiring finding pairs in an array that satisfy certain conditions',
      'When you need to compare array elements or find subarrays with specific properties',
      'In-place manipulation of arrays to save space'
    ],
    exampleProblems: [
      { id: '4', title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', completed: true },
      { id: '11', title: 'Is Subsequence', difficulty: 'Easy', completed: false },
      { id: '14', title: 'String Compression', difficulty: 'Medium', completed: false },
      { id: '17', title: 'Container With Most Water', difficulty: 'Medium', completed: true }
    ]
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    icon: (): JSX.Element => SlidersHorizontal({ size: 24, className: "text-amber-500" }),
    colorClass: 'bg-amber-500/20',
    progressColorClass: 'bg-amber-500 h-2 rounded-full',
    problemCount: 15,
    completedCount: 3,
    difficultyCount: { easy: 5, medium: 8, hard: 2 },
    description: 'The sliding window pattern is used to perform operations on a specific window size of an array or string. It\'s particularly useful for tracking a subset of elements in an array or string.',
    whenToUse: [
      'When you need to find subarrays or substrings that satisfy certain conditions',
      'For problems involving consecutive sequences of elements',
      'When you need to minimize or maximize something over a window of elements',
      'When brute force would lead to O(n²) time complexity and you need to optimize'
    ],
    exampleProblems: [
      { id: '5', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', completed: false },
      { id: '18', title: 'Minimum Size Subarray Sum', difficulty: 'Medium', completed: true },
      { id: '19', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', completed: false },
      { id: '20', title: 'Minimum Window Substring', difficulty: 'Hard', completed: false }
    ]
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    icon: (): JSX.Element => Binary({ size: 24, className: "text-purple-500" }),
    colorClass: 'bg-purple-500/20',
    progressColorClass: 'bg-purple-500 h-2 rounded-full',
    problemCount: 12,
    completedCount: 2,
    difficultyCount: { easy: 4, medium: 6, hard: 2 },
    description: 'Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half.',
    whenToUse: [
      'When searching in a sorted array, list, or search space',
      'When the search space can be reduced by half in each step',
      'For problems that ask for an optimized value (minimize/maximize) that satisfies certain conditions',
      'When you need to find upper/lower bounds in a sorted array'
    ],
    exampleProblems: [
      { id: '8', title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', completed: false },
      { id: '21', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', completed: true },
      { id: '22', title: 'Find Peak Element', difficulty: 'Medium', completed: false },
      { id: '23', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', completed: false }
    ]
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    icon: (): JSX.Element => Workflow({ size: 24, className: "text-green-500" }),
    colorClass: 'bg-green-500/20',
    progressColorClass: 'bg-green-500 h-2 rounded-full',
    problemCount: 20,
    completedCount: 2,
    difficultyCount: { easy: 3, medium: 10, hard: 7 },
    description: 'Dynamic Programming (DP) is a technique for solving complex problems by breaking them down into simpler subproblems. It stores the results of subproblems to avoid redundant calculations.',
    whenToUse: [
      'When the problem can be broken down into overlapping subproblems',
      'When the problem exhibits optimal substructure (optimal solution contains optimal solutions to subproblems)',
      'For optimization problems (minimizing/maximizing certain values)',
      'For counting problems (how many ways to achieve something)'
    ],
    exampleProblems: [
      { id: '24', title: 'Climbing Stairs', difficulty: 'Easy', completed: true },
      { id: '25', title: 'Coin Change', difficulty: 'Medium', completed: false },
      { id: '26', title: 'Longest Increasing Subsequence', difficulty: 'Medium', completed: false },
      { id: '16', title: 'Edit Distance', difficulty: 'Hard', completed: false }
    ]
  }
];
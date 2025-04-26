
import { ProblemDifficulty, ProblemStatus } from '@/components/ui/ProblemCard';

export interface Problem {
  id: string;
  title: string;
  patternId: string;
  patternName: string;
  difficulty: ProblemDifficulty;
  status: ProblemStatus;
  description?: string;
  approaches?: Approach[];
}

export interface Approach {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  code: {
    python?: string;
    javascript?: string;
    java?: string;
    cpp?: string;
  };
}

export const popularProblems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    patternId: 'arrays',
    patternName: 'Arrays & Hashing',
    difficulty: 'easy',
    status: 'solved'
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    patternId: 'arrays',
    patternName: 'Arrays & Hashing',
    difficulty: 'easy',
    status: 'solved'
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    patternId: 'arrays',
    patternName: 'Arrays & Hashing',
    difficulty: 'medium',
    status: 'unsolved'
  },
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    patternId: 'two-pointers',
    patternName: 'Two Pointers',
    difficulty: 'medium',
    status: 'starred'
  },
  {
    id: 'longest-substring-without-repeating',
    title: 'Longest Substring Without Repeating Characters',
    patternId: 'sliding-window',
    patternName: 'Sliding Window',
    difficulty: 'medium',
    status: 'unsolved'
  },
  {
    id: 'lowest-common-ancestor',
    title: 'Lowest Common Ancestor of a Binary Tree',
    patternId: 'dfs-bfs',
    patternName: 'DFS & BFS',
    difficulty: 'medium',
    status: 'starred'
  },
  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    patternId: 'two-pointers',
    patternName: 'Two Pointers',
    difficulty: 'hard',
    status: 'unsolved'
  },
  {
    id: 'word-break',
    title: 'Word Break',
    patternId: 'dynamic-programming',
    patternName: 'Dynamic Programming',
    difficulty: 'medium',
    status: 'unsolved'
  }
];

// Example of a detailed problem with approaches
export const detailedProblems: {[key: string]: Problem} = {
  'two-sum': {
    id: 'two-sum',
    title: 'Two Sum',
    patternId: 'arrays',
    patternName: 'Arrays & Hashing',
    difficulty: 'easy',
    status: 'solved',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**
Input: nums = [3,2,4], target = 6
Output: [1,2]

**Example 3:**
Input: nums = [3,3], target = 6
Output: [0,1]`,
    approaches: [
      {
        name: 'Brute Force Approach',
        description: 'Check all possible pairs of numbers to see if they sum up to the target.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        code: {
          python: `def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
          javascript: `function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}`
        }
      },
      {
        name: 'Hash Table Approach',
        description: 'Use a hash table to store seen values and check if the complement exists.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        code: {
          python: `def twoSum(nums, target):
    hash_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    return []`,
          javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
        }
      }
    ]
  }
};

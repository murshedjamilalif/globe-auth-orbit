import React from 'react';
import { 
  Car, CreditCard, ShoppingCart, MessageSquare, Calendar, Coffee, Users, Wallet, FileCog, Database
} from 'lucide-react';

export const lldCourses = [
  {
    id: 'parking-lot',
    title: 'Parking Lot System',
    description: 'Design a system to manage a multi-level parking lot with different vehicle types and payment processing.',
    icon: 'Car',
    iconColor: 'text-teal-500',
    difficulty: 'Easy',
    lessons: 12,
    duration: '4-5 hours',
    completion: 0,
    colorClass: 'bg-teal-500',
    colorName: 'teal',
    buttonColorClass: 'bg-teal-600',
    buttonHoverClass: 'bg-teal-700'
  },
  {
    id: 'payment-system',
    title: 'Payment Gateway',
    description: 'Implement a robust payment processing system with support for multiple payment methods and fraud detection.',
    icon: 'CreditCard',
    iconColor: 'text-purple-500',
    difficulty: 'Hard',
    lessons: 15,
    duration: '7-8 hours',
    completion: 0,
    colorClass: 'bg-purple-500',
    colorName: 'purple',
    buttonColorClass: 'bg-purple-600',
    buttonHoverClass: 'bg-purple-700'
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Platform',
    description: 'Design an e-commerce system with product catalog, shopping cart, order processing, and inventory management.',
    icon: 'ShoppingCart',
    iconColor: 'text-amber-500',
    difficulty: 'Medium',
    lessons: 18,
    duration: '6-7 hours',
    completion: 0,
    colorClass: 'bg-amber-500',
    colorName: 'amber',
    buttonColorClass: 'bg-amber-600',
    buttonHoverClass: 'bg-amber-700'
  },
  {
    id: 'chat-application',
    title: 'Chat Application',
    description: 'Build a real-time messaging system with support for one-on-one and group conversations.',
    icon: 'MessageSquare',
    iconColor: 'text-blue-500',
    difficulty: 'Medium',
    lessons: 14,
    duration: '5-6 hours',
    completion: 0,
    colorClass: 'bg-blue-500',
    colorName: 'blue',
    buttonColorClass: 'bg-blue-600',
    buttonHoverClass: 'bg-blue-700'
  },
  {
    id: 'calendar',
    title: 'Calendar System',
    description: 'Design a calendar application with event scheduling, recurring events, and reminders.',
    icon: 'Calendar',
    iconColor: 'text-green-500',
    difficulty: 'Medium',
    lessons: 12,
    duration: '4-5 hours',
    completion: 0,
    colorClass: 'bg-green-500',
    colorName: 'green',
    buttonColorClass: 'bg-green-600',
    buttonHoverClass: 'bg-green-700'
  },
  {
    id: 'coffee-machine',
    title: 'Coffee Machine',
    description: 'Implement a programmable coffee machine that can make different types of coffee with various add-ons.',
    icon: 'Coffee',
    iconColor: 'text-red-500',
    difficulty: 'Easy',
    lessons: 8,
    duration: '2-3 hours',
    completion: 0,
    colorClass: 'bg-red-500',
    colorName: 'red',
    buttonColorClass: 'bg-red-600',
    buttonHoverClass: 'bg-red-700'
  },
  {
    id: 'ride-sharing',
    title: 'Ride Sharing App',
    description: 'Design a ride-sharing system with ride matching, fare calculation, and driver/passenger management.',
    icon: 'Users',
    iconColor: 'text-indigo-500',
    difficulty: 'Hard',
    lessons: 20,
    duration: '8-9 hours',
    completion: 0,
    colorClass: 'bg-indigo-500',
    colorName: 'indigo',
    buttonColorClass: 'bg-indigo-600',
    buttonHoverClass: 'bg-indigo-700'
  },
  {
    id: 'splitwise',
    title: 'Expense Sharing',
    description: 'Create a Splitwise-like application to track group expenses and simplify debt among friends.',
    icon: 'Wallet',
    iconColor: 'text-pink-500',
    difficulty: 'Medium',
    lessons: 15,
    duration: '5-6 hours',
    completion: 0,
    colorClass: 'bg-pink-500',
    colorName: 'pink',
    buttonColorClass: 'bg-pink-600',
    buttonHoverClass: 'bg-pink-700'
  },
  {
    id: 'file-system',
    title: 'In-Memory File System',
    description: 'Design an in-memory file system with directory structure, file operations, and permissions.',
    icon: 'FileCog',
    iconColor: 'text-orange-500',
    difficulty: 'Hard',
    lessons: 16,
    duration: '6-7 hours',
    completion: 0,
    colorClass: 'bg-orange-500',
    colorName: 'orange',
    buttonColorClass: 'bg-orange-600',
    buttonHoverClass: 'bg-orange-700'
  }
];
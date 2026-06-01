import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  featuredArticle = {
    title: 'IndiGo to Hire 600 New Pilots in 2025 — What You Need to Know',
    excerpt: 'With IndiGo\'s massive fleet expansion to 500+ aircraft by 2030, the airline is ramping up pilot recruitment at an unprecedented scale. Here\'s how to position yourself for success.',
    category: 'Recruitment',
    date: 'May 2, 2025',
    readTime: '8 min read',
    author: 'Capt. Rohit Singh'
  };

  blogCards = [
    {
      emoji: '🛫',
      category: 'Career',
      title: 'CPL vs ATPL: Which License Should You Target First?',
      excerpt: 'Understanding the difference between CPL and ATPL and why getting your CPL right is the most critical step in your pilot career.',
      date: 'Apr 28, 2025',
      readTime: '6 min'
    },
    {
      emoji: '📋',
      category: 'DGCA',
      title: 'DGCA Theory Exam 2025: Complete Syllabus & Preparation Guide',
      excerpt: 'A comprehensive breakdown of all 6 DGCA theory papers with the best study resources, books, and mock test strategies.',
      date: 'Apr 22, 2025',
      readTime: '10 min'
    },
    {
      emoji: '✈️',
      category: 'Training',
      title: 'Best Flight Schools in India 2025: Ranked & Reviewed',
      excerpt: 'We compare India\'s top 10 DGCA-approved flight training organizations on cost, infrastructure, fleet, and placement record.',
      date: 'Apr 18, 2025',
      readTime: '12 min'
    },
    {
      emoji: '🌍',
      category: 'International',
      title: 'Flying Abroad for CPL — USA vs Canada vs Philippines',
      excerpt: 'A detailed cost-benefit analysis of training overseas for Indian pilots — visa, cost, conversion challenges, and pros/cons.',
      date: 'Apr 12, 2025',
      readTime: '9 min'
    },
    {
      emoji: '💰',
      category: 'Finance',
      title: 'Aviation Loans in India 2025 — Banks, NBFCs & Scholarships',
      excerpt: 'Everything you need to know about education loans for pilot training — eligibility, interest rates, collateral, and moratorium period.',
      date: 'Apr 5, 2025',
      readTime: '7 min'
    },
    {
      emoji: '🏥',
      category: 'Medical',
      title: 'DGCA Class 1 Medical: Complete Checklist & What to Expect',
      excerpt: 'A step-by-step guide to clearing your DGCA Class 1 aviation medical — tests, tips, disqualifying conditions, and how to appeal.',
      date: 'Mar 30, 2025',
      readTime: '8 min'
    }
  ];

 newsItems = [

  {
    icon: '📋',
    title: 'DGCA Issues New Examination Guidelines',
    date: 'May 2026',
    tag: 'DGCA Update'
  },

  {
    icon: '✈️',
    title: 'Major Airlines Continue Pilot Recruitment',
    date: 'May 2026',
    tag: 'Airline Hiring'
  },

  {
    icon: '📝',
    title: 'Commercial Pilot Licence Exam Schedule Released',
    date: 'May 2026',
    tag: 'Exam Notification'
  },

  {
    icon: '🛫',
    title: 'Indian Airlines Expand Domestic & International Routes',
    date: 'Apr 2026',
    tag: 'Fleet Expansion'
  }

];

industryUpdates = [

  {
    icon: '🏛️',
    title: 'DGCA',
    source: 'Regulatory Authority',
    description:
      'Updates on licensing, examinations, medical standards and aviation regulations.'
  },

  {
    icon: '✈️',
    title: 'Air India',
    source: 'Airline Expansion',
    description:
      'Fleet modernization, international route growth and pilot hiring initiatives.'
  },

  {
    icon: '🛫',
    title: 'IndiGo',
    source: 'Market Leader',
    description:
      'Network expansion, aircraft deliveries and increasing pilot demand.'
  },

  {
    icon: '🌤️',
    title: 'Akasa Air',
    source: 'Growing Airline',
    description:
      'Fleet growth, recruitment drives and operational expansion plans.'
  },

  {
    icon: '🛩️',
    title: 'Boeing',
    source: 'Aircraft Manufacturer',
    description:
      'Commercial aircraft deliveries and future aviation technology developments.'
  },

  {
    icon: '🌍',
    title: 'Airbus',
    source: 'Aircraft Manufacturer',
    description:
      'Aircraft orders, sustainability initiatives and aviation innovation projects.'
  }

];

  youtubeVideos = [
    { id: 'kCwHcVaIRGg', title: 'A Day in the Life of an Indian Commercial Pilot', duration: '14:32' },
    { id: 'AkgD7JqFfPw', title: 'DGCA CPL Theory — Air Navigation Explained', duration: '22:18' },
    { id: 'qxU3kBL6bPA', title: 'Flight School in India — Full Tour & Review', duration: '18:45' },
  ];

  studentStories = [
    {
      name: 'Sneha Verma',
      city: 'Lucknow → FO at IndiGo',
      story: 'Coming from a small city with zero aviation background, SkyPilot Academy changed everything. Their structured approach and mentor access helped me clear all 6 papers in one attempt.',
      avatar: 'SV'
    },
    {
      name: 'Rahul Krishnan',
      city: 'Kochi → Cadet Pilot Program',
      story: 'The cost calculator and school comparison tools were invaluable. I selected Orient Flying School on their recommendation and completed my 200 hours in 18 months.',
      avatar: 'RK'
    },
    {
      name: 'Aditya Bhatt',
      city: 'Ahmedabad → USA CPL',
      story: 'I was confused about training abroad vs India. SkyPilot\'s experts helped me choose the USA route, guided me through the visa process, and helped with DGCA license conversion.',
      avatar: 'AB'
    }
  ];
// industryUpdates: any;
}

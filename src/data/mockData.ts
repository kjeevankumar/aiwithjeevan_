import type { 
  CreatorProfile, 
  ResourceItem, 
  Question, 
  BookingSlot 
} from '../types';

export const creatorProfile: CreatorProfile = {
  name: 'Jeevan',
  brand: 'AI with Jeevan',
  headline: 'Making complex concepts simple.',
  instagramHandle: '@aiwithjeevan_',
  instagramUrl: 'https://instagram.com/aiwithjeevan_',
  youtubeUrl: 'https://www.youtube.com/@aiwithjeevan944',
  githubUrl: 'https://github.com/kjeevankumar',
  githubPagesUrl: 'https://kjeevankumar.github.io/kjeevankumar.g1/',
  portfolioUrl: 'http://g1gititalizing.me/kjeevankumar.g1/',
  linkedinUrl: 'https://linkedin.com/in/aiwithjeevan',
  telegramUrl: 'https://t.me/aiwithjeevan',
  email: 'connect@aiwithjeevan.com',
  bio: 'AI Engineer & Content Creator. Making complex AI, Machine Learning, and tech concepts simple. This hub is the central place for all links, study roadmaps, and resources I share with my Instagram followers.'
};

export const initialResourcesData: ResourceItem[] = [
  {
    id: 'res-portfolio',
    title: "Jeevan's Personal Portfolio",
    url: 'https://kjeevankumar.github.io/kjeevankumar.g1/',
    description: 'My official developer & engineering portfolio website (kjeevankumar.g1).',
    category: 'Portfolio',
    createdAt: '2026-10-04T12:30:00Z',
    published: true
  },
  {
    id: 'res-youtube',
    title: 'AI with Jeevan — YouTube Channel',
    url: 'https://www.youtube.com/@aiwithjeevan944',
    description: 'In-depth AI, Machine Learning, Python tutorials and project builds.',
    category: 'YouTube',
    createdAt: '2026-10-04T12:00:00Z',
    published: true
  },
  {
    id: 'res-1',
    title: '90-Day AI/ML Roadmap',
    url: 'https://aiml-90-days-challenge.vercel.app/',
    description: 'My complete 90-day AI/ML learning roadmap.',
    category: 'Roadmap',
    createdAt: '2026-10-04T10:00:00Z',
    published: true
  },
  {
    id: 'res-2',
    title: '45-Day AI/ML Series on Instagram',
    url: 'https://instagram.com/aiwithjeevan_',
    description: 'Bite-sized daily breakdowns of machine learning fundamentals, PyTorch, and GenAI concepts.',
    category: 'Learning',
    createdAt: '2026-10-03T10:00:00Z',
    published: true
  },
  {
    id: 'res-3',
    title: 'AI Video Creation Guide',
    url: 'https://instagram.com/aiwithjeevan_',
    description: 'Step-by-step tools and workflow I use to create AI educational content.',
    category: 'AI Tools',
    createdAt: '2026-10-02T10:00:00Z',
    published: true
  }
];

export const initialQuestionsData: Question[] = [
  {
    id: 'q-1',
    name: 'Aarav Sharma',
    email: 'aarav@example.com',
    question: 'How do I start with the 90-Day Roadmap if I only know basic Python?',
    category: 'Learning',
    createdAt: '1 day ago',
    status: 'answered',
    answer: {
      text: 'Start with Phase 1! Spend the first two weeks getting comfortable with NumPy and vector operations before jumping into model building.',
      answeredAt: '18 hours ago'
    }
  },
  {
    id: 'q-2',
    name: 'Sneha Patel',
    email: 'sneha@example.com',
    question: 'Where can I find all the reels from your 45-day series in order?',
    category: 'Learning',
    createdAt: '2 days ago',
    status: 'answered',
    answer: {
      text: 'Check the 45-Day Series highlight on my Instagram profile (@aiwithjeevan_) or click the link in our Resources section.',
      answeredAt: '1 day ago'
    }
  }
];

export const initialBookingSlots: BookingSlot[] = [
  { id: 'slot-1', date: 'Tomorrow', dayName: 'Monday', time: '06:00 PM IST', isAvailable: true },
  { id: 'slot-2', date: 'Tomorrow', dayName: 'Monday', time: '07:00 PM IST', isAvailable: true },
  { id: 'slot-3', date: 'Oct 07', dayName: 'Wednesday', time: '06:30 PM IST', isAvailable: true },
  { id: 'slot-4', date: 'Oct 08', dayName: 'Thursday', time: '07:00 PM IST', isAvailable: true },
  { id: 'slot-5', date: 'Oct 09', dayName: 'Friday', time: '06:00 PM IST', isAvailable: false }
];

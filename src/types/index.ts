export type QuestionCategory = 
  | 'AI/ML'
  | 'Projects'
  | 'Career'
  | 'Learning'
  | 'Jobs'
  | 'AI Tools'
  | 'Other';

export interface ResourceItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  category?: string;
  createdAt: string;
  published: boolean;
}

export interface Question {
  id: string;
  name: string;
  email: string;
  question: string;
  category: QuestionCategory;
  createdAt: string;
  answer?: {
    text: string;
    answeredAt: string;
  };
  status: 'pending' | 'answered';
  isPublic?: boolean;
}

export interface BookingSlot {
  id: string;
  date: string;
  dayName: string;
  time: string;
  isAvailable: boolean;
}

export interface BookingRequest {
  id: string;
  slotId: string;
  slotTime: string;
  name: string;
  email: string;
  whatsapp?: string;
  instagram?: string;
  topic: string;
  notes?: string;
  amount: number;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface CreatorProfile {
  name: string;
  brand: string;
  headline: string;
  instagramHandle: string;
  instagramUrl: string;
  youtubeUrl: string;
  githubUrl: string;
  portfolioUrl?: string;
  githubPagesUrl?: string;
  linkedinUrl: string;
  telegramUrl: string;
  email: string;
  bio: string;
}

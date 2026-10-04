import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ResourceItem, Question, BookingSlot, BookingRequest } from '../types';
import { initialResourcesData, initialQuestionsData, initialBookingSlots } from '../data/mockData';

interface AppContextType {
  resources: ResourceItem[];
  addResource: (item: Omit<ResourceItem, 'id' | 'createdAt'>) => void;
  updateResource: (id: string, updated: Partial<ResourceItem>) => void;
  deleteResource: (id: string) => void;
  togglePublishResource: (id: string) => void;

  questions: Question[];
  addQuestion: (q: Omit<Question, 'id' | 'createdAt' | 'status'>) => void;
  answerQuestion: (id: string, answerText: string) => void;
  deleteQuestion: (id: string) => void;

  bookingSlots: BookingSlot[];
  toggleSlotAvailability: (id: string) => void;
  addBookingSlot: (slot: Omit<BookingSlot, 'id'>) => void;
  deleteBookingSlot: (id: string) => void;

  bookingRequests: BookingRequest[];
  addBookingRequest: (req: Omit<BookingRequest, 'id' | 'createdAt' | 'status'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  RESOURCES: 'aiwithjeevan_resources',
  QUESTIONS: 'aiwithjeevan_questions',
  SLOTS: 'aiwithjeevan_slots',
  REQUESTS: 'aiwithjeevan_requests'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state with localStorage or default mock data
  const [resources, setResources] = useState<ResourceItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RESOURCES);
      return stored ? JSON.parse(stored) : initialResourcesData;
    } catch {
      return initialResourcesData;
    }
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      return stored ? JSON.parse(stored) : initialQuestionsData;
    } catch {
      return initialQuestionsData;
    }
  });

  const [bookingSlots, setBookingSlots] = useState<BookingSlot[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SLOTS);
      return stored ? JSON.parse(stored) : initialBookingSlots;
    } catch {
      return initialBookingSlots;
    }
  });

  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.REQUESTS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(resources));
  }, [resources]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SLOTS, JSON.stringify(bookingSlots));
  }, [bookingSlots]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(bookingRequests));
  }, [bookingRequests]);

  // Resource Operations (Newest first!)
  const addResource = (item: Omit<ResourceItem, 'id' | 'createdAt'>) => {
    const newResource: ResourceItem = {
      ...item,
      id: `res-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    // Prepend to top
    setResources(prev => [newResource, ...prev]);
  };

  const updateResource = (id: string, updated: Partial<ResourceItem>) => {
    setResources(prev => prev.map(r => r.id === id ? { ...r, ...updated } : r));
  };

  const deleteResource = (id: string) => {
    setResources(prev => prev.filter(r => r.id !== id));
  };

  const togglePublishResource = (id: string) => {
    setResources(prev => prev.map(r => r.id === id ? { ...r, published: !r.published } : r));
  };

  // Question Operations
  const addQuestion = (q: Omit<Question, 'id' | 'createdAt' | 'status'>) => {
    const newQuestion: Question = {
      ...q,
      id: `q-${Date.now()}`,
      createdAt: 'Just now',
      status: 'pending'
    };
    setQuestions(prev => [newQuestion, ...prev]);
  };

  const answerQuestion = (id: string, answerText: string) => {
    setQuestions(prev => prev.map(q => {
      if (q.id === id) {
        return {
          ...q,
          status: 'answered',
          answer: {
            text: answerText,
            answeredAt: 'Just now'
          }
        };
      }
      return q;
    }));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  // Booking Slot Operations
  const toggleSlotAvailability = (id: string) => {
    setBookingSlots(prev => prev.map(s => s.id === id ? { ...s, isAvailable: !s.isAvailable } : s));
  };

  const addBookingSlot = (slot: Omit<BookingSlot, 'id'>) => {
    const newSlot: BookingSlot = {
      ...slot,
      id: `slot-${Date.now()}`
    };
    setBookingSlots(prev => [...prev, newSlot]);
  };

  const deleteBookingSlot = (id: string) => {
    setBookingSlots(prev => prev.filter(s => s.id !== id));
  };

  const addBookingRequest = (req: Omit<BookingRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRequest: BookingRequest = {
      ...req,
      id: `req-${Date.now()}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'confirmed'
    };
    setBookingRequests(prev => [newRequest, ...prev]);
    // Mark slot as booked
    setBookingSlots(prev => prev.map(s => s.id === req.slotId ? { ...s, isAvailable: false } : s));
  };

  return (
    <AppContext.Provider value={{
      resources,
      addResource,
      updateResource,
      deleteResource,
      togglePublishResource,
      questions,
      addQuestion,
      answerQuestion,
      deleteQuestion,
      bookingSlots,
      toggleSlotAvailability,
      addBookingSlot,
      deleteBookingSlot,
      bookingRequests,
      addBookingRequest
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

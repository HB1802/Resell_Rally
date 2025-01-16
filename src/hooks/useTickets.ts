import { useState, useEffect } from 'react';

export interface Ticket {
  id: number;
  eventName: string;
  date: string;
  location: string;
  section: string;
  row: string;
  price: number;
  status: 'active' | 'pending' | 'sold';
  buyerId?: string;
}

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    setTickets([
      {
        id: 1,
        eventName: 'NBA Finals 2024',
        date: 'Jun 4, 2024',
        location: 'Madison Square Garden, NY',
        section: 'A3',
        row: '12',
        price: 499,
        status: 'active'
      },
      {
        id: 2,
        eventName: 'Taylor Swift | The Eras Tour',
        date: 'Mar 15, 2024',
        location: 'SoFi Stadium, LA',
        section: 'B5',
        row: '20',
        price: 299,
        status: 'pending'
      }
    ]);
    setLoading(false);
  }, []);

  const updateTicket = async (ticketId: number, updates: Partial<Ticket>) => {
    setTickets(prev => 
      prev.map(ticket => 
        ticket.id === ticketId ? { ...ticket, ...updates } : ticket
      )
    );
  };

  return { tickets, loading, updateTicket };
};
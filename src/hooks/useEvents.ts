import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Event } from '../types/event';

// Local events data
const defaultEvents: Event[] = [
  {
    id: 1,
    title: "Taylor Swift | The Eras Tour",
    date: "2024-03-15",
    location: "SoFi Stadium, LA",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    minPrice: 299,
    category: "concerts"
  },
  {
    id: 2,
    title: "NBA Finals 2024",
    date: "2024-06-04",
    location: "Madison Square Garden, NY",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    minPrice: 499,
    category: "sports"
  },
  {
    id: 3,
    title: "Dave Chappelle Live",
    date: "2024-04-20",
    location: "Comedy Cellar, NY",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    minPrice: 150,
    category: "comedy"
  },
  {
    id: 4,
    title: "Hamilton",
    date: "2024-05-15",
    location: "Broadway Theatre, NY",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    minPrice: 200,
    category: "theatre"
  }
];

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    try {
      const search = searchParams.get('search')?.toLowerCase() || '';
      const location = searchParams.get('location')?.toLowerCase() || '';
      const date = searchParams.get('date') || '';
      const category = searchParams.get('category')?.toLowerCase() || '';

      let filteredEvents = [...defaultEvents];

      if (category) {
        filteredEvents = filteredEvents.filter(event => 
          event.category.toLowerCase() === category
        );
      }

      if (search) {
        filteredEvents = filteredEvents.filter(event =>
          event.title.toLowerCase().includes(search) ||
          event.location.toLowerCase().includes(search)
        );
      }

      if (location) {
        filteredEvents = filteredEvents.filter(event =>
          event.location.toLowerCase().includes(location)
        );
      }

      if (date) {
        filteredEvents = filteredEvents.filter(event =>
          event.date === date
        );
      }

      setEvents(filteredEvents);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  return { events, loading };
};
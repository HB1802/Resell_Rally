import { Event } from '../types/event';

const API_URL = '/api/events';

export const fetchEvents = async (params: URLSearchParams): Promise<Event[]> => {
  try {
    const response = await fetch(`${API_URL}?${params.toString()}`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
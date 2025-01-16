import { apiClient } from './api';
import { endpoints } from '../config/api';
import { Event } from '../types/event';

export const eventsService = {
  getAll: () => 
    apiClient.get(endpoints.events),
    
  getById: (id: number) => 
    apiClient.get(`${endpoints.events}${id}/`),
    
  create: (eventData: Partial<Event>) => 
    apiClient.post(endpoints.events, eventData),
};
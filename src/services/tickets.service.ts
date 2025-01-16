import { apiClient } from './api';
import { endpoints } from '../config/api';

export const ticketsService = {
  getMyTickets: () => 
    apiClient.get(endpoints.tickets),
    
  create: (ticketData: any) => 
    apiClient.post(endpoints.tickets, ticketData),
    
  update: (id: number, data: any) => 
    apiClient.put(`${endpoints.tickets}${id}/`, data),
    
  delete: (id: number) => 
    apiClient.delete(`${endpoints.tickets}${id}/`),
};
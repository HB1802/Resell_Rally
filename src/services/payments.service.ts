import { apiClient } from './api';
import { endpoints } from '../config/api';

export const paymentsService = {
  createPayment: (ticketId: number) => 
    apiClient.post(endpoints.payments.create, { ticket_id: ticketId }),
    
  verifyPayment: (paymentData: any) => 
    apiClient.post(endpoints.payments.verify, paymentData),
};
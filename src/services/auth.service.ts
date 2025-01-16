import { apiClient } from './api';
import { endpoints } from '../config/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

export const authService = {
  login: (credentials: LoginCredentials) => 
    apiClient.post(endpoints.auth.login, credentials),
    
  register: (data: RegisterData) => 
    apiClient.post(endpoints.auth.register, data),
    
  getProfile: () => 
    apiClient.get(endpoints.auth.profile),
};
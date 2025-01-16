export const API_BASE_URL = 'http://localhost:8000/api';

export const endpoints = {
  auth: {
    login: '/users/login/',
    register: '/users/register/',
    profile: '/users/profile/',
  },
  events: '/events/',
  tickets: '/tickets/',
  payments: {
    create: '/payments/create/',
    verify: '/payments/verify/',
  }
};
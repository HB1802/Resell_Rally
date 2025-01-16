import { useState } from 'react';

export interface Notification {
  id: number;
  type: 'sale' | 'payment' | 'ticket' | 'system';
  message: string;
  time: string;
  read: boolean;
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'sale',
      message: 'Your ticket for Taylor Swift concert has been sold',
      time: '2 hours ago',
      read: false
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return {
    notifications,
    markAsRead,
    markAllAsRead,
    deleteNotification
  };
};
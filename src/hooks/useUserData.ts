import { useState, useEffect } from 'react';

interface UserData {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  balance: number;
  notifications: number;
}

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    balance: 1250.00,
    notifications: 3
  });

  // In a real app, fetch user data from API
  useEffect(() => {
    // Simulated API call
    const fetchUserData = async () => {
      // Replace with actual API call
    };
    fetchUserData();
  }, []);

  const updateUserData = (updates: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...updates }));
  };

  return { userData, updateUserData };
};
import { useState } from 'react';

export const usePayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initiatePayment = async (ticketId: number) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/payments/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticket_id: ticketId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment');
      }

      const data = await response.json();
      return data;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    initiatePayment,
    isLoading,
  };
};
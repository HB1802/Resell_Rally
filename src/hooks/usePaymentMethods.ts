import { useState } from 'react';

export interface PaymentMethod {
  id: number;
  type: 'credit' | 'debit';
  last4: string;
  expiry: string;
  isDefault: boolean;
}

export const usePaymentMethods = () => {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);

  const addPaymentMethod = async (cardData: { 
    cardNumber: string;
    expiry: string;
  }): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMethod: PaymentMethod = {
          id: Date.now(),
          type: 'credit',
          last4: cardData.cardNumber.slice(-4),
          expiry: cardData.expiry,
          isDefault: methods.length === 0
        };
        setMethods(prev => [...prev, newMethod]);
        resolve();
      }, 500);
    });
  };

  const removePaymentMethod = async (id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const methodToDelete = methods.find(m => m.id === id);
        if (methodToDelete?.isDefault) {
          reject(new Error('Cannot delete default payment method'));
          return;
        }
        setMethods(prev => prev.filter(method => method.id !== id));
        resolve();
      }, 500);
    });
  };

  const setDefaultMethod = async (id: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setMethods(prev => prev.map(method => ({
          ...method,
          isDefault: method.id === id
        })));
        resolve();
      }, 500);
    });
  };

  return {
    methods,
    addPaymentMethod,
    removePaymentMethod,
    setDefaultMethod
  };
};
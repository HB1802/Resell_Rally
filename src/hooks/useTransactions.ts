import { useState, useEffect } from 'react';

export interface Transaction {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    setTransactions([
      {
        id: 1,
        type: 'credit',
        amount: 299,
        description: 'Ticket Sale - Taylor Swift Concert',
        date: '2024-03-01',
        status: 'completed'
      },
      {
        id: 2,
        type: 'debit',
        amount: 150,
        description: 'Withdrawal to Bank Account',
        date: '2024-02-28',
        status: 'completed'
      }
    ]);
    setLoading(false);
  }, []);

  const withdrawFunds = async (amount: number) => {
    // In a real app, make API call to process withdrawal
    const newTransaction: Transaction = {
      id: Date.now(),
      type: 'debit',
      amount,
      description: 'Withdrawal to Bank Account',
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    return newTransaction;
  };

  return { transactions, loading, withdrawFunds };
};
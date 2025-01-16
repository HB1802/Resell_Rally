import React, { useState } from 'react';
import { DollarSign, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useUserData } from '../../../hooks/useUserData';
import { useTransactions } from '../../../hooks/useTransactions';

export const Balance = () => {
  const { userData } = useUserData();
  const { transactions, withdrawFunds } = useTransactions();
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const handleWithdraw = async () => {
    if (!withdrawAmount || isWithdrawing) return;
    
    const amount = parseFloat(withdrawAmount);
    if (amount <= 0 || amount > userData.balance) return;

    setIsWithdrawing(true);
    try {
      await withdrawFunds(amount);
      setWithdrawAmount('');
    } finally {
      setIsWithdrawing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Available Balance</h2>
          <div className="text-3xl font-bold">${userData.balance.toFixed(2)}</div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Enter amount"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              onClick={handleWithdraw}
              disabled={isWithdrawing || !withdrawAmount || parseFloat(withdrawAmount) <= 0 || parseFloat(withdrawAmount) > userData.balance}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              {isWithdrawing ? 'Processing...' : 'Withdraw'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'credit' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'credit' ? <ArrowUpRight /> : <ArrowDownRight />}
                </div>
                <div className="ml-4">
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                  <div className={`text-sm ${
                    transaction.status === 'completed' 
                      ? 'text-green-600' 
                      : transaction.status === 'pending' 
                        ? 'text-yellow-600' 
                        : 'text-red-600'
                  }`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
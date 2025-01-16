import React, { useState } from 'react';
import { Calendar, Download, Search } from 'lucide-react';
import { useTransactions } from '../../../hooks/useTransactions';
import { Toast } from '../../common/Toast';

export const PurchaseHistory = () => {
  const { transactions } = useTransactions();
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const purchases = transactions
    .filter(t => t.type === 'debit')
    .filter(p => 
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.date.includes(searchTerm)
    );

  const downloadTicket = async (id: number) => {
    try {
      // Simulate ticket download
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a dummy PDF blob
      const blob = new Blob(['Ticket data'], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ticket-${id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      showToast('Ticket downloaded successfully', 'success');
    } catch (error) {
      showToast('Failed to download ticket', 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Purchase History</h2>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search purchases..."
            className="pl-10 pr-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-6">
        {purchases.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No purchases found
          </div>
        ) : (
          purchases.map((purchase) => (
            <div key={purchase.id} className="border rounded-lg p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{purchase.description}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{purchase.date}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Transaction ID: #{purchase.id}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${purchase.amount}</div>
                  <div className={`text-sm ${
                    purchase.status === 'completed' 
                      ? 'text-green-600' 
                      : purchase.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                  }`}>
                    {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                  </div>
                  {purchase.status === 'completed' && (
                    <button
                      onClick={() => downloadTicket(purchase.id)}
                      className="mt-2 flex items-center text-indigo-600 hover:text-indigo-700 text-sm"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download Ticket
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { PaymentMethodCard } from './PaymentMethodCard';
import { AddPaymentModal } from './AddPaymentModal';
import { usePaymentMethods } from '../../../../hooks/usePaymentMethods';
import { Toast } from '../../../common/Toast';

export const PaymentMethods = () => {
  const { methods, addPaymentMethod, removePaymentMethod, setDefaultMethod } = usePaymentMethods();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleAddCard = async (cardData: { cardNumber: string; expiry: string; cvv: string }) => {
    try {
      await addPaymentMethod({
        cardNumber: cardData.cardNumber.replace(/\s/g, ''),
        expiry: cardData.expiry
      });
      setIsModalOpen(false);
      showToast('Payment method added successfully', 'success');
    } catch (error) {
      showToast('Failed to add payment method', 'error');
    }
  };

  const handleMakeDefault = async (id: number) => {
    try {
      await setDefaultMethod(id);
      showToast('Default payment method updated', 'success');
    } catch (error) {
      showToast('Failed to update default payment method', 'error');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      if (methods.length === 1) {
        showToast('Cannot delete the only payment method', 'error');
        return;
      }
      
      const methodToDelete = methods.find(m => m.id === id);
      if (methodToDelete?.isDefault) {
        showToast('Cannot delete default payment method', 'error');
        return;
      }

      await removePaymentMethod(id);
      showToast('Payment method removed', 'success');
    } catch (error) {
      showToast('Failed to remove payment method', 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Payment Methods</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add New
        </button>
      </div>
      
      <div className="space-y-4">
        {methods.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No payment methods added
          </div>
        ) : (
          methods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              onMakeDefault={handleMakeDefault}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      <AddPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCard}
      />

      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};
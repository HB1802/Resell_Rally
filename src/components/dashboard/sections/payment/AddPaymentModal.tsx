import React from 'react';
import { X } from 'lucide-react';
import { FormInput } from './components/FormInput';
import { usePaymentForm } from './hooks/usePaymentForm';
import { formatCardNumber, formatExpiry } from './utils/cardValidation';

interface AddPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (cardData: { cardNumber: string; expiry: string; cvv: string }) => void;
}

export const AddPaymentModal = ({ isOpen, onClose, onAdd }: AddPaymentModalProps) => {
  const { formData, errors, updateField, validateForm } = usePaymentForm();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAdd(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add Payment Method</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Card Number"
            value={formData.cardNumber}
            onChange={(value) => updateField('cardNumber', formatCardNumber(value))}
            error={errors.cardNumber}
            maxLength={19}
            placeholder="1234 5678 9012 3456"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Expiry Date"
              value={formData.expiry}
              onChange={(value) => updateField('expiry', formatExpiry(value))}
              error={errors.expiry}
              maxLength={5}
              placeholder="MM/YY"
            />
            <FormInput
              label="CVV"
              value={formData.cvv}
              onChange={(value) => updateField('cvv', value)}
              error={errors.cvv}
              maxLength={4}
              placeholder="123"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};
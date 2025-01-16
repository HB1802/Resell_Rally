import React from 'react';
import { CreditCard, Trash2 } from 'lucide-react';
import { PaymentMethod } from '../../../../hooks/usePaymentMethods';

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onMakeDefault: (id: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export const PaymentMethodCard = ({ method, onMakeDefault, onDelete }: PaymentMethodCardProps) => {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isSettingDefault, setIsSettingDefault] = React.useState(false);

  const handleMakeDefault = async () => {
    if (isSettingDefault) return;
    setIsSettingDefault(true);
    try {
      await onMakeDefault(method.id);
    } finally {
      setIsSettingDefault(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await onDelete(method.id);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <CreditCard className="h-6 w-6 text-gray-600 mr-3" />
          <div>
            <div className="font-medium">
              •••• {method.last4}
              {method.isDefault && (
                <span className="ml-2 text-sm text-green-600">Default</span>
              )}
            </div>
            <div className="text-sm text-gray-500">Expires {method.expiry}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {!method.isDefault && (
            <button 
              onClick={handleMakeDefault}
              disabled={isSettingDefault}
              className={`text-sm text-indigo-600 hover:text-indigo-700 ${
                isSettingDefault ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSettingDefault ? 'Setting...' : 'Make Default'}
            </button>
          )}
          <button 
            onClick={handleDelete}
            disabled={isDeleting || method.isDefault}
            className={`text-red-600 hover:text-red-700 ${
              (isDeleting || method.isDefault) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title={method.isDefault ? "Cannot delete default payment method" : "Delete payment method"}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
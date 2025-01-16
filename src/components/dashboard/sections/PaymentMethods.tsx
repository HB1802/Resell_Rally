import React from 'react';
import { CreditCard, Plus, Trash2 } from 'lucide-react';

const paymentMethods = [
  {
    id: 1,
    type: 'credit',
    last4: '4242',
    expiry: '12/24',
    isDefault: true
  },
  {
    id: 2,
    type: 'credit',
    last4: '8888',
    expiry: '03/25',
    isDefault: false
  }
];

export const PaymentMethods = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Payment Methods</h2>
        <button className="flex items-center text-indigo-600 hover:text-indigo-700">
          <Plus className="h-5 w-5 mr-1" />
          Add New
        </button>
      </div>
      
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="border rounded-lg p-4">
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
                  <button className="text-sm text-indigo-600 hover:text-indigo-700">
                    Make Default
                  </button>
                )}
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
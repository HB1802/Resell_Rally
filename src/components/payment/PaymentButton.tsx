import React from 'react';
import { usePayment } from '../../hooks/usePayment';

interface PaymentButtonProps {
  ticketId: number;
  amount: number;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({ ticketId, amount }) => {
  const { initiatePayment, isLoading } = usePayment();

  const handlePayment = async () => {
    try {
      const order = await initiatePayment(ticketId);
      
      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: 'Resell Rally',
        description: 'Ticket Purchase',
        order_id: order.order_id,
        handler: async (response: any) => {
          try {
            await fetch('/api/payments/verify/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            // Handle successful payment
            window.location.href = '/dashboard/tickets';
          } catch (error) {
            console.error('Payment verification failed:', error);
          }
        },
        prefill: {
          email: 'user@example.com',
        },
        theme: {
          color: '#4F46E5',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Failed to initiate payment:', error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
    >
      {isLoading ? 'Processing...' : `Pay ₹${amount}`}
    </button>
  );
};
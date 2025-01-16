import { useState } from 'react';
import { validateCardNumber, validateExpiry, validateCVV } from '../utils/cardValidation';

interface FormErrors {
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}

export const usePaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    }
    if (!validateExpiry(formData.expiry)) {
      newErrors.expiry = 'Invalid expiry date';
    }
    if (!validateCVV(formData.cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return {
    formData,
    errors,
    updateField,
    validateForm
  };
};
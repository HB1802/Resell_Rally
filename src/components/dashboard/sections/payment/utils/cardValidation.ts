// Card validation utilities
export const validateCardNumber = (number: string): boolean => {
  const regex = /^[0-9]{16}$/;
  return regex.test(number);
};

export const validateExpiry = (expiry: string): boolean => {
  const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!regex.test(expiry)) return false;

  const [month, year] = expiry.split('/');
  const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
  const today = new Date();
  
  return expDate > today;
};

export const validateCVV = (cvv: string): boolean => {
  const regex = /^[0-9]{3,4}$/;
  return regex.test(cvv);
};

export const formatCardNumber = (number: string): string => {
  return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
};

export const formatExpiry = (expiry: string): string => {
  const cleaned = expiry.replace(/\D/g, '');
  if (cleaned.length >= 2) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  }
  return cleaned;
};
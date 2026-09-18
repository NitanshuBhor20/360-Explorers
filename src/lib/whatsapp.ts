/**
 * WhatsApp configuration and utility functions
 */

export const WHATSAPP_CONFIG = {
  OWNER_NUMBER: '919730277759',
  DEFAULT_MESSAGE: 'Hello! I have a few questions about the tour plan.',
};

/**
 * Validates a WhatsApp number format
 * @param number The phone number to validate
 * @returns boolean
 */
export const validateWhatsAppNumber = (number: string): boolean => {
  // Simple regex for numbers with country code (no + or spaces)
  const phoneRegex = /^\d{10,15}$/;
  return phoneRegex.test(number);
};

/**
 * Generates the official WhatsApp API URL
 * @param message Optional custom message
 * @returns The formatted WhatsApp URL
 */
export const getWhatsAppUrl = (message?: string): string => {
  const rawNumber = WHATSAPP_CONFIG.OWNER_NUMBER;
  const number = rawNumber.replace(/[+\s-]/g, '');
  const text = encodeURIComponent(message || WHATSAPP_CONFIG.DEFAULT_MESSAGE);

  if (!validateWhatsAppNumber(number)) {
    console.error('INVALID WHATSAPP CONFIGURATION: Please check WHATSAPP_CONFIG.OWNER_NUMBER');
    return '#';
  }

  return `https://wa.me/${number}?text=${text}`;
};

/**
 * Handles the WhatsApp redirection flow
 * @param message Optional custom message
 */
export const handleWhatsAppChat = (message?: string): void => {
  const url = getWhatsAppUrl(message);
  if (url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

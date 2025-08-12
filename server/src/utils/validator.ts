export const validatePAN = (pan: string) =>
  /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

export const validateAadhaar = (aadhaar: string) => /^\d{12}$/.test(aadhaar);

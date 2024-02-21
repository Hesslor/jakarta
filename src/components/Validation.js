export const validateEmail = (email) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      return true
    } else {
      return false
    }
};

export const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for a basic phone number validation
    const phoneRegex = /^\d{10}$/;

    if (phoneRegex.test(phoneNumber)) {
        return true
    } else {
      return false
    }
  };
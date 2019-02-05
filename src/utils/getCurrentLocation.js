const getCurrentLocation = () => {
  if (typeof window === 'undefined') return '';

  return window.location.href;
};

export default getCurrentLocation;

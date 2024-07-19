export const formatPrice = input => {
  const number = parseFloat(input);
  if (isNaN(number)) {
    console.error('Invalid input:', input);
    return 'Invalid number';
  }
  
  return number.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'USD',
  });
}
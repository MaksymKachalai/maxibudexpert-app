export function isValidPhone(number) {
  const stringify = number.toString();
  const onlyNumbers = stringify.replaceAll(/[\D]/g, '');
  if (onlyNumbers.length <= 9 || onlyNumbers.length > 12) {
    return {
      result: false,
      message: 'The number is wrong',
    };
  }
  return { result: true, message: 'Number is valid' };
}

export function isValidEmail(email) {
  const regex = /\b[\w\.-]+@[\w\.]+\.\w{2,4}\b/;
  const stringify = email.toString().toLowerCase();
  const isValid = regex.test(stringify);
  return isValid;
}

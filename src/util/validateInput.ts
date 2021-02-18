export const validateInput = (id: string, password: string): string => {
  if (id.length !== 11) {
    return 'Lütfen geçerli bir tc kimlik numarası giriniz!';
  } else if (password.length < 5) {
    return 'Şifre minimum 5 karakter içermelidir!';
  }
  return '';
};

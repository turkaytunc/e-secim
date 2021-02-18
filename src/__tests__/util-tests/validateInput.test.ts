import { validateInput } from '../../util/validateInput';

describe('validateInput', () => {
  it('should work without input', () => {
    expect(validateInput('', '')).toEqual('Lütfen geçerli bir tc kimlik numarası giriniz!');
  });
  it('should give error if password less than 5 character', () => {
    expect(validateInput('12345678900', '')).toEqual('Şifre minimum 5 karakter içermelidir!');
  });
});

import React from 'react';

interface IRedirect {
  confirmed: boolean;
}

const RedirectVote = ({ confirmed }: IRedirect) => {
  const text = confirmed ? 'Oyunuz Başarıyla Kaydedildi.' : 'Oy Kullanma Hakkınız Yok!';
  const textColor = confirmed ? 'green' : 'red';
  return (
    <div style={{ fontSize: '1.5em' }}>
      <div style={{ color: textColor }}>{text}</div>
      <div>Sonuç Ekranına Yönlendiriliyorsunuz.</div>
      <div>Lütfen Bekleyiniz...</div>
    </div>
  );
};

export default RedirectVote;

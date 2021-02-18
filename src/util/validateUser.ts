export const validateUser = async (hashedUserInfo: string) =>
  fetch('https://secim.webde.biz.tr/api/secim/isuservalid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ hashedUserInfo: hashedUserInfo }),
  });

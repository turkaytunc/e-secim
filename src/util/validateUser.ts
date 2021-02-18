export const validateUser = async (hashedUserInfo: string) => {
  try {
    const fetchResult = await fetch('https://secim.webde.biz.tr/api/secim/isuservalid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ hashedUserInfo: hashedUserInfo }),
    });
    return fetchResult.status;
  } catch (error) {
    console.error(error);
    return 400;
  }
};

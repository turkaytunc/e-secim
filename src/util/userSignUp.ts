export const userSignUp = async (userId: string, userPassword: string) => {
  try {
    const fetchResult = await fetch(`https://secim.webde.biz.tr/api/developerhelper/secmenekle`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tcNo: userId,
        sifre: userPassword,
      }),
    });
    return fetchResult;
  } catch (error) {
    return 'error';
  }
};

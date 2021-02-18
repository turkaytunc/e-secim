export const fetchCandidates = async () => {
  try {
    const fetchResult = await fetch('https://secim.webde.biz.tr/api/secim/getlistofaday');
    return fetchResult.json();
  } catch (error) {
    return [];
  }
};

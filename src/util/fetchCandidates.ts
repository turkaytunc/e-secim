export const fetchCandidates = async () => {
  let data = [];
  try {
    const fetchResult = await fetch('https://secim.webde.biz.tr/api/secim/getlistofaday');
    data = await fetchResult.json();
    return data;
  } catch (error) {
    console.error('Cannot fetch candidates!');
    return data;
  }
};

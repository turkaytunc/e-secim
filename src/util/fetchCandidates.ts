export const fetchCandidates = () =>
  fetch('https://secim.webde.biz.tr/api/secim/getlistofaday').then((data) => data.json());

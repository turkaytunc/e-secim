export const fetchResults = () =>
  fetch('https://secim.webde.biz.tr/api/secim/secimsonuclari').then((data) => data.json());

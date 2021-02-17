import sha256 from 'crypto-js/sha256';

export const vote = (tc: string, selectedOption: string, tcHash: string) => {
  const voteHash = sha256(tc + selectedOption).toString();
  return fetch('https://secim.webde.biz.tr/api/secim/oykullan/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      AuthenticationValue: tcHash,
      SifreliOyu: voteHash,
    }),
  });
};

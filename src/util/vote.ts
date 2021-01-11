export const vote = (voteHash: string, tcHash: string) =>
  fetch('https://secim.webde.biz.tr/api/secim/oykullan/', {
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

import React, { useEffect, useState } from 'react';
import { fetchCandidates } from '../../util/fetchCandidates';
import { useHistory } from 'react-router-dom';
import Vote from '../vote-candidate/Vote';

const FetchCandidates = () => {
  const [candidates, setCandidates] = useState<[]>([]);
  const [voteResponseCode, setVoteResponseCode] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchCandidates()
      .then((data) => setCandidates(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let time: NodeJS.Timeout;
    if (voteResponseCode === '200' || voteResponseCode === '400') {
      time = setTimeout(() => {
        history.push('/e-secim/results');
      }, 3000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [voteResponseCode, history]);

  return (
    <div>
      {voteResponseCode === '' ? (
        <Vote candidates={candidates} setVoteResponseCode={setVoteResponseCode} />
      ) : voteResponseCode === '400' ? (
        <div style={{ fontSize: '1.5em' }}>
          <div style={{ color: 'red' }}>Oy Kullanma Hakkınız Yok!</div>
          <div>Sonuç Ekranına Yönlendiriliyorsunuz.</div>
          <div>Lütfen Bekleyiniz...</div>
        </div>
      ) : (
        <div style={{ fontSize: '1.5em' }}>
          <div style={{ color: 'green' }}>Oyunuz Başarıyla Kaydedildi.</div>
          <div>Sonuç Ekranına Yönlendiriliyorsunuz.</div>
          <div>Lütfen Bekleyiniz...</div>
        </div>
      )}
    </div>
  );
};

export default FetchCandidates;

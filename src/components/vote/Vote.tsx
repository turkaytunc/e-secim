import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../store/Store';
import { fetchCandidates } from '../../util/fetchCandidates';
import sha256 from 'crypto-js/sha256';
import { vote } from '../../util/vote';
import { useHistory } from 'react-router-dom';

const Vote = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const { state } = useContext(Store);
  const [voteResponseCode, setVoteResponseCode] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchCandidates()
      .then((data) => setCandidates(data))
      .catch((err) => console.log(err));
  });

  const giveVote = () => {
    if (selectedOption === '') return;
    const voteHash = sha256(state.user.tc + selectedOption).toString();
    vote(voteHash, state.user.tcHash).then((res) => setVoteResponseCode(res.status.toString()));
  };

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
        <>
          {candidates.map((el: any) => (
            <div>
              <label>
                <input
                  onChange={(event) => setSelectedOption(event.target.value)}
                  type="radio"
                  name="aday"
                  value={el.adayNo}
                  checked={selectedOption === `${el.adayNo}`}
                />
                {el.adayAd}
              </label>
            </div>
          ))}
          <button onClick={() => giveVote()}>Oy Ver</button>
        </>
      ) : voteResponseCode === '400' ? (
        <>
          <div style={{ color: 'red' }}>Oy Kullanma Hakkınız Yok!</div>
          <div>Sonuc Ekranına Yönlendiriliyorsunuz Lütfen Bekleyiniz...</div>
        </>
      ) : (
        <>
          <div>Oyunuz Başarıyla Kaydedildi.</div>
          <div>Sonuc Ekranına Yönlendiriliyorsunuz Lütfen Bekleyiniz...</div>
        </>
      )}
    </div>
  );
};

export default Vote;

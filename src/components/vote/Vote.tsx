import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../store/Store';
import { fetchCandidates } from '../../util/fetchCandidates';
import sha256 from 'crypto-js/sha256';
import { vote } from '../../util/vote';
import { useHistory } from 'react-router-dom';
import './vote.scss';

//images

import erturk from '../../static-files/erturk.jpg';
import karacali from '../../static-files/karacali.jpg';
import tunc from '../../static-files/tunc.jpg';

const imgArr = [erturk, tunc, karacali];

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
        <div>
          <div className="candidates-container">
            {candidates.map((el: any) => (
              <div key={el.adayNo} className="candidate">
                <img className="candidate-img" src={imgArr[el.adayNo - 1]} alt="candidate" />
                <label className="candidate-label">
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
          </div>
          <button className="vote-button" onClick={() => giveVote()}>
            Oy Ver
          </button>
        </div>
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

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
    if (voteResponseCode === '200') {
      history.push('/e-secim/results');
    }
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
        'oy kullanma Hakki yok'
      ) : (
        'sonuclar ekrani'
      )}
    </div>
  );
};

export default Vote;

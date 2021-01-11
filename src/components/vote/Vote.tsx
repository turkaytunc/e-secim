import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../store/Store';
import { fetchCandidates } from '../../util/fetchCandidates';
import sha256 from 'crypto-js/sha256';
import { vote } from '../../util/vote';

const Vote = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const { state } = useContext(Store);

  useEffect(() => {
    fetchCandidates()
      .then((data) => setCandidates(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const giveVote = () => {
    if (selectedOption === '') return;

    const voteHash = sha256(state.user.tc + selectedOption).toString();

    vote(voteHash, state.user.tcHash).then((data) => console.log(data));
  };

  return (
    <div>
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
    </div>
  );
};

export default Vote;

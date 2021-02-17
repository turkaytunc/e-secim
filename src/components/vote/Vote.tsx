import React, { useContext } from 'react';
import { Store } from '../../store/Store';
import sha256 from 'crypto-js/sha256';
import { vote } from '../../util/vote';
import './vote.scss';

//images

import erturk from '../../static-files/erturk.jpg';
import karacali from '../../static-files/karacali.jpg';
import tunc from '../../static-files/tunc.jpg';
import placeholderPhoto from '../../static-files/ph.jpg';
import { useState } from 'react';

const imgArr = [erturk, tunc, karacali];

interface ICandidates {
  candidates: [];
  setVoteResponseCode: (status: string) => void;
}

const Vote = ({ candidates, setVoteResponseCode }: ICandidates) => {
  const { state } = useContext(Store);
  const [selectedOption, setSelectedOption] = useState('');

  const giveVote = () => {
    if (selectedOption === '') return;
    const voteHash = sha256(state.user.tc + selectedOption).toString();
    vote(voteHash, state.user.tcHash).then((res) => setVoteResponseCode(res.status.toString()));
  };

  return (
    <div>
      <div className="candidates-container">
        {candidates.map((el: any) => (
          <div key={el.adayNo} className="candidate">
            <img
              className="candidate-img"
              src={imgArr[el.adayNo - 1] ? imgArr[el.adayNo - 1] : placeholderPhoto}
              alt="candidate"
            />
            <label className="candidate-label">
              <input
                onChange={(event) => setSelectedOption(event.target.value)}
                type="radio"
                name="aday"
                data-testid="vote-action"
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
  );
};

export default Vote;

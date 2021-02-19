import { useContext } from 'react';
import { Store } from '../../store/Store';
import { vote } from '../../util/vote';
import './vote.scss';

//images

import erturk from '../../static-files/erturk.jpg';
import karacali from '../../static-files/karacali.jpg';
import tunc from '../../static-files/tunc.jpg';

import { useState } from 'react';
import CandidateChoice from './candidate-choice/CandidateChoice';

const imgArr = [erturk, tunc, karacali];

interface ICandidates {
  candidates: object[];
  setVoteResponseCode: (status: string) => void;
}

const Vote = ({ candidates, setVoteResponseCode }: ICandidates) => {
  const { state } = useContext(Store);
  const [selectedOption, setSelectedOption] = useState('');

  const giveVote = () => {
    if (selectedOption === '') return;

    vote(state.user.tc, selectedOption, state.user.tcHash).then((res) => setVoteResponseCode(res.status.toString()));
  };

  return (
    <div>
      <div className="candidates-container">
        {candidates.map((el: any) => (
          <CandidateChoice
            el={el}
            key={el.adayNo}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            imgArr={imgArr}
          />
        ))}
      </div>
      <button data-testid="vote-action" className="vote-button" onClick={() => giveVote()}>
        Oy Ver
      </button>
    </div>
  );
};

export default Vote;

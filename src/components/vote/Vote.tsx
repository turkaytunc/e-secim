import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../store/Store';
import { fetchCandidates } from '../../util/fetchCandidates';
import sha256 from 'crypto-js/sha256';

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

    const vote = sha256(state.user.tc + selectedOption).toString();

    fetch('https://secim.webde.biz.tr/api/secim/oykullan/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        AuthenticationValue: state.user.tcHash,
        SifreliOyu: vote,
      }),
    }).then((data) => console.log(data));
  };

  /* 
  {"adayNo":1,"adayAd":"Atakan Ertürk"}
{"adayNo":2,"adayAd":"Türkay Tunç"}
{"adayNo":3,"adayAd":"Atakan Karaçalı"}
 */

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

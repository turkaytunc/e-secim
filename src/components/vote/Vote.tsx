import React, { useEffect, useState } from 'react';
import { fetchCandidates } from '../../util/fetchCandidates';

const Vote = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetchCandidates()
      .then((data) => setCandidates(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

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
    </div>
  );
};

export default Vote;

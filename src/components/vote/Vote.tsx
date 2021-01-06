import React, { useEffect, useState } from 'react';
import { fetchCandidates } from '../../util/fetchCandidates';

const Vote = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates()
      .then((data) => setCandidates(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {candidates.map((el) => (
        <div>
          <div>{JSON.stringify(el)}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Vote;

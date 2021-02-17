import React, { useEffect, useState } from 'react';
import { fetchCandidates } from '../../util/fetchCandidates';
import { useHistory } from 'react-router-dom';
import Vote from '../vote/Vote';
import RedirectVote from '../redirect-vote/RedirectVote';

const FetchCandidates = () => {
  const [candidates, setCandidates] = useState<[]>([]);
  const [voteResponseCode, setVoteResponseCode] = useState('');
  const history = useHistory();

  useEffect(() => {
    const handleCandidates = async () => {
      const data = await fetchCandidates();
      setCandidates(data);
    };
    handleCandidates();
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
        <RedirectVote confirmed={false} />
      ) : (
        <RedirectVote confirmed={true} />
      )}
    </div>
  );
};

export default FetchCandidates;

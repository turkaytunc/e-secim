import React from 'react';
import VerticalBar from '../verticalBar/VerticalBar';
import './results.scss';

const Results = () => {
  const veri = [2, 3, 4];
  const candidates = ['aday1', 'aday2', 'aday3'];
  return (
    <div className="results-container">
      Todo: sonuclari goruntule
      <VerticalBar voteData={veri} candidates={candidates} />
    </div>
  );
};

export default Results;

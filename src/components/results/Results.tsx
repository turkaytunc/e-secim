import React, { useEffect, useState } from 'react';
import VerticalBar from '../verticalBar/VerticalBar';
import './results.scss';

type Result = [{ aday: { adayNo: number; adayAd: string }; adligiOySayisi: number }];

const initialState: Result = [{ aday: { adayNo: 0, adayAd: 'Sonuclar Guncelleniyor' }, adligiOySayisi: 0 }];

const Results = () => {
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    const fetchResults = () =>
      fetch('https://secim.webde.biz.tr/api/secim/secimsonuclari')
        .then((data) => data.json())
        .then((data) => setResult(data));

    let time: NodeJS.Timeout;
    time = setTimeout(() => {
      fetchResults();
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  });

  return (
    <div className="results-container">
      Todo: sonuclari goruntule
      <VerticalBar voteData={result.map((e) => e.adligiOySayisi)} candidates={result.map((e) => e.aday.adayAd)} />
    </div>
  );
};

export default Results;

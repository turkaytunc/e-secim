import React, { useEffect, useState } from 'react';
import { fetchResults } from '../../util/fetchResults';
import VerticalBar from '../verticalBar/VerticalBar';
import './results.scss';

type Result = [{ aday: { adayNo: number; adayAd: string }; adligiOySayisi: number }];

const initialState: Result = [{ aday: { adayNo: 0, adayAd: 'Sonuçlar Güncelleniyor...' }, adligiOySayisi: 0 }];

const Results = () => {
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    fetchResults().then((data) => setResult(data));
  }, []);

  useEffect(() => {
    let time: NodeJS.Timeout;
    time = setTimeout(() => {
      fetchResults().then((data) => setResult(data));
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  });

  return (
    <div className="results-container">
      <VerticalBar voteData={result.map((e) => e.adligiOySayisi)} candidates={result.map((e) => e.aday.adayAd)} />
    </div>
  );
};

export default Results;

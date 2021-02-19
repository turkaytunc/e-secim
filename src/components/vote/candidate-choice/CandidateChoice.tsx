import React from 'react';

import placeholderPhoto from '../../../static-files/ph.jpg';

interface CandidateProps {
  el: { adayNo: number; adayAd: string };
  selectedOption: string;
  setSelectedOption: any;
  imgArr: string[];
}

const CandidateChoice = ({ el, selectedOption, setSelectedOption, imgArr }: CandidateProps) => {
  return (
    <div key={el.adayNo} className="candidate">
      <img className="candidate-img" src={imgArr[el.adayNo - 1] || placeholderPhoto} alt="candidate" />
      <label className="candidate-label">
        <input
          onChange={(event) => setSelectedOption(event.target.value)}
          type="radio"
          name="aday"
          data-testid={`vote-input-action-${el.adayNo}`}
          value={el.adayNo}
          checked={selectedOption === `${el.adayNo}`}
        />
        {el.adayAd}
      </label>
    </div>
  );
};

export default CandidateChoice;

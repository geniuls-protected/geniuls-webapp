import React from "react";

export const HorizontalAnimation = ({ fixed, word1, word2 }) => {
  return (
    <div className="horizontal__animation__container">
      <p>{fixed}</p>
      <div className="horizontal__animation__words">
        <p>{word1}</p>
        <p>{word2}</p>
      </div>
    </div>
  );
};

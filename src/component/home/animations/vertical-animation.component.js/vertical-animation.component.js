import React from "react";
import { HorizontalAnimation } from "../horizontal-animation/horizontal-animation.component";

export const VerticalAnimation = () => {
  return (
    <div className="vertical__animation__container">
      <div className="vertical__animation__words">
        <div className="vertical__animation__horizontal__component">
          <HorizontalAnimation
            fixed="Bag Your Dream"
            word1="Job"
            word2="Internship"
          />
        </div>
        <div className="vertical__animation__horizontal__component">
          <HorizontalAnimation
            fixed="Solidify Your"
            word1="Skills"
            word2="Resume"
          />
        </div>
        <div className="vertical__animation__horizontal__component">
          <HorizontalAnimation
            fixed="Better"
            word1="Package"
            word2="Position"
          />
        </div>
      </div>
    </div>
  );
};

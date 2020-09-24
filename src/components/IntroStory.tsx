import React from "react";

interface IProps {
  proceed: () => void;
}

export const IntroStory: React.FC<IProps> = ({ proceed }) => {
  return (
    <div className="centered-menu">
      <span className="story-text">
        It is a dark time for the inhabitants of Earth. Emperor Covidius and his
        stealth army have seized control of the planet. People are holed up in
        their houses, afraid to venture out. In an attempt to stifle the
        rebellion once and for all, the fiendish Covidius has swept into New
        York and kidnapped Tom. This has gone too far. The reign of Emperor
        Covidius must come to an end....
      </span>
      <button className="pure-button" onClick={proceed}>
        Embark on Your Journey
      </button>
    </div>
  );
};

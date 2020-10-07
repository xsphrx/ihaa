import React from "react";

const BackgroundWave = () => {
  return (
    <div className="wave">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="background-wave"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L120,149.3C240,171,480,213,720,197.3C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default BackgroundWave;

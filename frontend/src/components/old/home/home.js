import React from "react";

import BackgroundWave from "./backgroundWave";
import Logo from "./logo";
import Bg from "../../static/imgs/bg.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="wave-bg">
        <Logo />
        <div className="main-text">Welcome to IHAA,</div>
        <div className="second-text">
          Elevforeningen IHÅ er en fællesskabende frivillig forening for
          tidligere højskoleelever på Idrætshøjskolen Aarhus.
        </div>
        <BackgroundWave />
      </div>
      <div className="call-to-action">
        <div>
          <span>Get Started</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

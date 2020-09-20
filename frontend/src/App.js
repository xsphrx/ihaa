import React from "react";
import "./static/css/main.css";

import BackgroundWave from "./components/home/backgroundWave";
import Logo from "./components/home/logo";
import NavBar from "./components/navBar";
import About from "./components/about/about";
import WhatWeDo from "./components/whatWeDo/whatWeDo";

function App() {
  return (
    <div>
      <div className="wave-bg">
        <Logo />
        <BackgroundWave />
      </div>
      <NavBar />
      <About />
      <WhatWeDo />
      <div className="spacer"></div>
    </div>
  );
}

export default App;

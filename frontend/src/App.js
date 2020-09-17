import React from "react";
import "./static/css/main.css";

import BackgroundWave from "./components/backgroundWave";
import Logo from "./components/logo";

function App() {
  return (
    <div className="content">
      <Logo />
      <BackgroundWave />
    </div>
  );
}

export default App;

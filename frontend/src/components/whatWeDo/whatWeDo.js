import React from "react";

import Welcoming from "./welcoming";
import WhatWeDoBg from "./whatwedobg";

const WhatWeDo = () => {
  return (
    <div className="whatwedo">
      <WhatWeDoBg />
      <Welcoming />
      <div className="header">What We Do</div>
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
};

export default WhatWeDo;

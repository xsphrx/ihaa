import React from "react";

import Welcoming from "./welcoming";
import WhatWeDoBg from "./whatwedobg";

import Image from "../../../static/imgs/welcoming.svg";

const WhatWeDo = () => {
  return (
    <>
      <div className="whatwedo-desktop">
        <div className="text">
          <div className="main-text">Hvad har vi gang i?</div>
          <div className="second-text">
            Rent praktisk afholdes der møder på højskolen en gang månedligt,
            hvor vi hygger os og diskuterer mødets dagsorden. Her er alle
            velkomne, jo flere desto bedre. Derudover afholder Elevforeningen
            Super Søndage for vores medlemmer den første søndag i hver måned.
            Her arrangeres der alt lige fra volleyballturneringer til
            fællesbadning i havnebadet og en biograftur og vi er altid åbne for
            nye ideer til sjove oplevelser. Udover dette afholdes der topmøder
            to gange årligt hvor arrangementer for det fremtidige halvår
            arrangeres. Elevforeningen IHÅ er tæt tilknyttet til Idrætshøjskolen
            Århus, hvorfor Elevforeningen også står for én højskoleaften og en
            fest for eleverne på det pågældende ophold. Og som om dette ikke var
            nok, arrangerer Elevforeningen også den årlige Jubilæumsfest i
            foråret og Boldspilsstævnet i efteråret.{" "}
          </div>
        </div>
        <div className="image">
          <img src={Image} />
        </div>
      </div>
      <div className="whatwedo-mobile">
        <WhatWeDoBg />
        <Welcoming />
        <div className="header">What We Do</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

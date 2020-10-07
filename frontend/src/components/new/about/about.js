import React, { useRef, useEffect } from "react";
import Image from "../../../static/imgs/havingfun.svg";

import Celebration from "./celebration";
import AboutBg from "./aboutbg";

const About = () => {
  return (
    <>
      <div className="about-desktop">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="text">
          <div className="main-text">
            Fællesskab, frivillighed og fede arrangementer
          </div>
          <div className="second-text">
            Elevforeningen IHÅ er en fællesskabende frivillig forening for
            tidligere højskoleelever på Idrætshøjskolen Aarhus.
            <br />
            <br />
            Først og fremmest er Elevforeningen IHÅ en samling af tidligere
            elever, der efter deres ophold på IHÅ fortsat gerne vil holde
            kontakt til højskolen og være en del af fællesskabet.
            <br />
            <br />
            Vi er en forening med ca. 600 medlemmer fordelt over flere årgange
            siden 1970, samt en bestyrelse på 7 personer med jyllands- og
            sjællandsrepræsentanter. Derudover udgør Elevforeningen også
            fodboldklubben Galacticos med egen bestyrelse. Alt arbejde i
            Elevforeningen IHÅ er på frivillig basis, hvilket vil sige, at alle,
            der har lyst til at lave et arrangement eller andet
            foreningsarbejde, kan indgå i et allerede fungerende organ og gøre
            sit til, at det hele kører rundt. Nøgleordene i Elevforeningen IHÅ
            er fællesskab efter højskole, frivillighed og fede arrangementer.
            Derudover er der altid godt humør og højt til loftet når vi samles
            “hjemme” på IHÅ.
          </div>
        </div>
      </div>
      <div className="about-mobile">
        <AboutBg />
        <Celebration />
        <div className="header">About Us</div>
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

export default About;

import React, { useRef } from "react";

import { TweenMax, Bounce, Expo, Power0, TimelineMax } from "gsap";
import { _checkPlugin } from "gsap/gsap-core";

import TopBg from "./topbg";
import BottomBg from "./bottomBg";
import Description from "../description";

import Logo from "./logo";
import Click from "./click";
import About from "../about/about";
import ClickDown from "../../../static/imgs/click-down.svg";
import WhatWeDo from "../whatwedo/whatwedo";

const Home = () => {
  let click = useRef();
  let clickDown = useRef();
  let other = useRef();
  let homeMobile = useRef();
  let ease1 = Power0;
  let duration = 1;

  const slideUp = async () => {
    TweenMax.to(click, duration, {
      transform: "translateY(-100vh)",
      display: "none",
      ease: ease1,
    });
    TweenMax.fromTo(
      other,
      duration,
      {
        transform: "translateY(0)",
      },
      { transform: "translateY(-100vh)", display: "block", ease: ease1 }
    );
    TweenMax.to(other, 0, { transform: "translateY(0)", delay: duration });
    TweenMax.to(homeMobile, duration, { display: "none" });
    TweenMax.to(clickDown, 1, { display: "flex", opacity: 1, delay: 1 });
  };

  const slideDown = async () => {
    TweenMax.to(click, 1, {
      transform: "translateY(0)",
      display: "flex",
    });
    TweenMax.fromTo(
      other,
      1,
      {
        transform: "translateY(-100vh)",
      },
      { transform: "translateY(0)", display: "none" }
    );
    TweenMax.to(other, 0, { transform: "translateY(-100vh)", delay: 1 });
    TweenMax.to(homeMobile, 1, { display: "flex" });
  };

  return (
    <>
      <div className="home-desktop">
        <div className="home">
          <TopBg />
          <BottomBg />

          <div className="logo">IHAA</div>
          <div className="elements">
            <span>Home</span>
            <span>About</span>
            <span>Join</span>
          </div>

          <div className="content">
            <div className="header">
              Welcome
              <br />
              To IHAA,
            </div>
            <div className="text">
              Vi vil forlænge det unikke højskolefællesskab og skabe
              fællesskaber.
            </div>
            <div className="button">
              <div>
                <span>Join</span>
              </div>
            </div>
          </div>
        </div>
        <Description />
        <About />
        <WhatWeDo />
      </div>
      <div className="home-mobile" ref={(el) => (homeMobile = el)}>
        <Logo />
        <div className="text">
          <div className="main-text">Welcome to IHAA,</div>
          <div className="second-text">
            Vi vil forlænge det unikke højskolefællesskab og skabe fællesskaber.
          </div>
        </div>
        <div
          className="click"
          onClick={() => slideUp()}
          ref={(el) => (click = el)}
        >
          <Click />
        </div>
      </div>
      <div className="other-mobile" ref={(el) => (other = el)}>
        <div
          className="click-down"
          onClick={() => slideDown()}
          ref={(el) => (clickDown = el)}
        >
          <img src={ClickDown} />
        </div>
        <About />
        <WhatWeDo />
      </div>
    </>
  );
};

export default Home;

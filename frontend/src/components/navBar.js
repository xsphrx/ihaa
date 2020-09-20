import React from "react";

import { RiHome4Fill } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegIdBadge } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <RiHome4Fill size={25} />
        <span>home</span>
      </div>
      <div>
        <FaRegListAlt size={25} />
        <span>about</span>
      </div>
      <div>
        <FaRegIdBadge size={25} />
        <span>register</span>
      </div>
    </div>
  );
};

export default NavBar;

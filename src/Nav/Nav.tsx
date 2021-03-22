import * as React from "react";
import LogoAndBurger from "./LogoAndBurger";
import NavRightSide from "./NavRightSide";
import Search from "./Search";

const Nav: React.FC = () => (
  <div className="h-14 bg-yt-gray w-full flex">
    <LogoAndBurger />
    <Search />
    <NavRightSide />
  </div>
);

export default Nav;

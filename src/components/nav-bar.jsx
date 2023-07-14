import React from "react";
import SearchBar from "./search-bar";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiThemoviedatabase } from "react-icons/si";
function NavBar({ children }) {
  return (
    <>
      <div className="flex flex-col fixed top-0 h-full bg-gradient-to-r from-blue-400 to-indigo-200 p-8 space-y-8 font-sans font-semibold">
        <SiThemoviedatabase className="text-5xl" />
        <a>HOME</a>
        <a>GENRE</a>
        <a>WATCHLIST</a>
        <a>{children}</a>
        <div className="flex justify-start items-end text-2xl ">
          <RiLogoutBoxRLine />
        </div>
      </div>
    </>
  );
}

export default NavBar;

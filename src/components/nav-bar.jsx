import React from "react";
import SearchBar from "./search-bar";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiThemoviedatabase } from "react-icons/si";
function NavBar({ children }) {
  return (
    <>
      <div className="flex flex-col fixed top-0 h-full bg-gradient-to-r from-sky-950 to-sky-800 p-8 space-y-8 font-sans font-semibold text-stone-400">
        <SiThemoviedatabase className="text-5xl" />
        <a>HOME</a>
        <a>GENRE</a>
        <a>WATCHLIST</a>
        <a>{children}</a>
        <a>
          ONLINE
            <ul>
              <li>
                Danny
              </li>
            </ul>




        </a>
        <div className="flex justify-start items-end text-2xl ">
          <RiLogoutBoxRLine />
        </div>
      </div>
    </>
  );
}

export default NavBar;

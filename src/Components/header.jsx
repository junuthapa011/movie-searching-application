import React from "react";
import { MdMovieFilter } from "react-icons/md";

function Header() {
  return (
    <div className="fixed w-full flex justify-center items-center h-[60px] bg-gradient-to-r from-sky-700 to-sky-950 font-bold text-stone-400 decoration-solid">
      <p className="pr-2">WATCHERS : THE MOVIE DB</p>
      <MdMovieFilter />
    </div>
  );
}

export default Header;

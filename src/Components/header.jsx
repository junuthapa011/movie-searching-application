import React from "react";
import { MdMovieFilter } from "react-icons/md";

function Header() {
  return (
    <div className="fixed w-full flex justify-center items-center h-[40px] bg-gradient-to-r from-indigo-200 to-blue-400 font-bold">
      <p className="pr-2">THE MOVIE DB</p>
      <MdMovieFilter />
    </div>
  );
}

export default Header;

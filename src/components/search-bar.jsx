import React, { useState } from "react";

function SearchBar({ type, value, onChange, placeholder }) {
  return (
    <div>
      <form>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="placeholder-opacity-25 bg-indigo-200 rounded p-2 outline-none border border-solid border-slate-200 hover:border-slate-300"
        />
      </form>
    </div>
  );
}

export default SearchBar;

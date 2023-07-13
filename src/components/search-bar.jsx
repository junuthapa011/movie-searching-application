import React, {useState} from 'react'

function SearchBar({type, value, onChange}) {
 
  return (
    <div>
      <form>
        <input type={type} value={value} onChange={onChange} className='placeholder-opacity-25 bg-indigo-200 rounded'/>
        {/* <button className='m-2'>SEARCH</button>  */}
      </form>
    </div>
  )
}

export default SearchBar
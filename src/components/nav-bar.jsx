import React from 'react'
import SearchBar from './search-bar'

function NavBar() {
    const HandleSearch = (search) => {
        console.log('', search)
    }
  return (
   <div className='flex flex-col fixed h-full bg-gradient-to-r from-blue-400 to-indigo-200 p-12 space-y-8 font-sans font-light'>
    <a>HOME</a>
    <a>GENRE</a>
    <a>WATCHLIST</a>
    <a><SearchBar onSearch={HandleSearch}/></a>


   </div>
  )
}

export default NavBar
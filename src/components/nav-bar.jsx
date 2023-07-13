import React from 'react'
import SearchBar from './search-bar'

function NavBar({children}) {

return (
   <div className='flex flex-col fixed h-full bg-gradient-to-r from-blue-400 to-indigo-200 p-8 space-y-8 font-sans font-light'>
    <a>HOME</a>
    <a>GENRE</a>
    <a>WATCHLIST</a>
    <a>{children}</a>
    


   </div>
  )
}

export default NavBar
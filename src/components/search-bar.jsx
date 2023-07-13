import React, {useState} from 'react'

function SearchBar({onSearch}) {
  const [ search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(search)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Your Favorite Movies' value= {search} onChange={handleInputChange} className='placeholder-opacity-25 bg-indigo-200 rounded'/>
        <button className='m-2'>SEARCH</button>
      </form>
    </div>
  )
}

export default SearchBar
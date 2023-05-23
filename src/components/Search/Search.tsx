import React from 'react'
import SearchBar from './SearchBar'

const Search: React.FC = () => {
  return (
    <div className='flex flex-col  gap-10'>
        <h2 className='text-4xl search'>Search results</h2>
        <SearchBar/>
    </div>
  )
}

export default Search
import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className='mr-8 relative'>
          <input type="text" className='outline-none rounded-3xl w-60 h-9 ' />
          <span className='p-2  rounded-full text-xl bg-blue-700 absolute top-0 right-0'>
         <BiSearch />
          </span>
    </div>
  )
}

export default Search
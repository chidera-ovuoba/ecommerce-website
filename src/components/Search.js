import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const Search = () => {
  const { search,searchTerm } = useGlobalContext();
  return (
    <div className='mr-8 relative'>
          <input type="text" className='outline-none rounded-3xl w-60 h-9 pl-5' value={searchTerm} onChange={(e)=>search(e.target.value)} />
          <Link to='/products' className='p-2  rounded-full text-xl bg-blue-700 absolute top-0 right-0'>
         <BiSearch />
          </Link>
    </div>
  )
}

export default Search
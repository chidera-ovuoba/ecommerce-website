import React from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi'
const Navbar = () => {
  return (
    <>
          <div className="flex justify-between items-center bg-blue-300 px-3 py-5 fixed z-10 w-screen">
              <div className='font-bold text-4xl text-white'>Shop<span className='text-black'>aholic</span></div>
              <div className="flex">
                  <Search />
                  <ul className='flex justify-between pr-9 items-center'>
                      <li className='px-3 text-white font-medium hover:border-b-2 border-b-0 border-gray-600 border-solid rounded-sm'><Link to="/">Home</Link></li>
                      <li className='px-3 text-white font-medium hover:border-b-2 border-b-0 border-gray-600 border-solid rounded-sm'><a href="#">About</a></li>
            <li className='px-3 text-white font-medium hover:border-b-2 border-b-0 border-gray-600 border-solid rounded-sm'><a href="#">Contact Us</a></li>
            <li className='px-3 text-white font-medium hover:border-b-2 border-b-0 border-gray-600 border-solid rounded-sm'><Link to="/products">Products</Link></li>
                      <li className='px-3 text-3xl text-white font-medium hover:border-b-2 border-b-0 border-gray-600 border-solid rounded-sm'><Link to="/signin"><BiUserCircle/></Link></li>
                  </ul>
              </div>
          </div>
    </>
  )
}

export default Navbar
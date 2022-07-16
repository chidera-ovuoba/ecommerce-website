import React from 'react'
import { BsStar } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
const SingleProduct = () => {
  return (
      <div className='ml-20 mr-10 my-10'>
          <button className='p-3 rounded-lg bg-white shadow-3xl mb-5'>Go Back</button>
          <div className="flex gap-9 my-10">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-[35rem]'/>
           
              
              <div className='w-60'>
                  <h2 className='p-5 border-b-2 border-gray-300 border-solid'>Sony Playstation 4 Pro White Version</h2>
                <div className='p-4 border-b-2 border-gray-300 border-solid gap-1 flex items-center justify-center'><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/> <span className='ml-4'>2 reviews</span></div>
                  <div className='p-4 border-b-2 border-gray-300 border-solid'>
                  Price:$434.466
                  </div>
                  <p className="mt-4">Description: auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a</p>
              </div>

              <div className="shadow-3xl h-5/6">
                  <div className="flex p-5 justify-between border-b-2 border-gray-300 border-solid">
                      <span>Price:</span>
                      <p className="font-bold">R3990.99</p>
                  </div>
                  <div className="flex p-5 justify-between border-b-2 border-gray-300 border-solid">
                      <span>Price:</span>
                      <p className="font-bold">R3990.99</p>
                  </div>
                  <div className="flex p-5 justify-between border-b-2 border-gray-300 border-solid">
                      <span>Price:</span>
                      <p className="font-bold">R3990.99</p>
                  </div>
                  <div className="p-5">
                      <div className="flex px-10 py-2 gap-3 items-center justify-center text-sm uppercase text-white shadow-xl rounded-md bg-sky-400">
                      <AiOutlinePlus/><AiOutlineShoppingCart/> add to cart 
                      </div>
                  </div>
                  </div>
          </div>
          <h3 className='text-2xl uppercase font-bold mb-6'>Reviews</h3>
          <div className=' mb-4 ml-4 pb-10 border-b-2 w-2/5 border-gray-400 grid gap-2'>
              <span className='bold'>asda</span>
              <div className='flex gap-1'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></div>
              <span className='bold'>2022-20-12</span>
              <p>jbnkfnkgrkmgk</p>
          </div>
           <div className=' mb-4 ml-4 pb-10 border-b-2 w-2/5 border-gray-400 grid gap-2'>
              <span className='bold'>asda</span>
              <div className='flex gap-1'><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></div>
              <span className='bold'>2022-20-12</span>
              <p>jbnkfnkgrkmgk</p>
          </div>
          <h3 className='text-2xl uppercase font-bold mb-6'>WRITE A CUSTOMER REVIEW</h3>
          <div className='bg-purple-400 text-white p-5 rounded-md w-[40%] items-center'>Please sign in to write a review</div>
      </div>
  )
}

export default SingleProduct
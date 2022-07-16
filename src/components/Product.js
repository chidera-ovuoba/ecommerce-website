import React from 'react'
import { BsStarFill } from "react-icons/bs";
const Product = () => {
  return (
      <div className='p-3 rounded-xl h-[24rem] w-64 grid bg-blue-300'>
          <div className='rounded-xl'>
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-60 h-40 rounded-xl' />
          </div>
          <p>vnnrneubjuveuvujeu</p>
          <div className='flex gap-1 items-center'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><span>12 reviews</span></div>
          <div className='text-3xl font-semibold'>$456.90</div>
      
      </div>
  )
}

export default Product
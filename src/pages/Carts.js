import React from 'react'
import { MdDelete } from 'react-icons/md';
const Carts = () => {
    return (
        <div className='flex gap-36'>
      <div className='ml-24'>
          <h3 className='text-2xl uppercase font-bold mb-6'>SHOPPING CART</h3>
          <div className='flex gap-11 items-center'>
              <div className='w-28 h-28 flex items-center'>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='object-cover rounded-md' />
              </div>
              
              <p className='w-[150px]'>Sony Playstation 4 Pro White Version</p>
              <p>R3990.99</p>
              <input type="number" className='w-[100px] p-3 border-b-2 border-gray-400 outline-none'/>
              <button className='p-3 rounded-lg bg-white shadow-3xl'><MdDelete/></button>
          </div>
            </div>
            <div className="shadow-3xl h-5/6 w-1/4">
                  <div className="p-5  border-b-2 border-gray-300 border-solid">
                    <h3 className='text-2xl uppercase font-bold mb-6'>SUBTOTAL (4) ITEMS</h3>
                    <p>$353.34</p>
                </div>
                  <div className="p-5">
                      <div className="flex px-10 py-2 gap-3 items-center justify-center text-sm uppercase text-white shadow-xl rounded-md bg-sky-400">
                     proceed to checkout 
                      </div>
                </div>
               </div>
            </div>
  )
}

export default Carts
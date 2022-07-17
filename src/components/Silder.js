import React from 'react'

const Silder = ({url}) => {
  return (
        <div className=' group w-[50rem] h-[33rem] overflow-x-hidden flex -translate-x-2/4 -translate-y-2/4 top-[55%] left-2/4 absolute rounded-3xl'>
      <img src={url} alt="" className='w-full h-full object-cover' />
      
      </div>
    
  )
}

export default Silder
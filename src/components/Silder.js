import React from 'react'

const Silder = ({url}) => {
  return (
         
        <div className='w-[50rem] h-[33rem] overflow-x-hidden rounded-3xl'>
      <img src={url} alt="" className='w-full h-full object-cover' />
      
      </div>
    
  )
}

export default Silder
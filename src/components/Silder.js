import React from 'react'
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import { useGlobalContext } from '../context';
const Silder = ({ url }) => {
  const { ProductsData, sliderIndex, sliderInput, moveRight,moveLeft } = useGlobalContext();
  console.log(sliderIndex);
  return (
         
    <div className='w-[50rem] h-[33rem] overflow-x-hidden rounded-3xl relative'>
      <div className='absolute top-2/4 p-3 rounded-full z-20 text-white text-xl bg-blue-400 left-0' onClick={moveLeft}><GrFormPrevious /></div>
      <div className='absolute top-2/4 p-3 rounded-full text-white text-xl bg-blue-400 right-0' onClick={moveRight}><GrFormNext/></div>
      <img src={url} alt="" className='w-full h-full object-cover' />
      <div className='absolute bottom-4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex gap-2'>
        {ProductsData.map((item, i) => {
          return <div key={i} className={`w-3 h-3 rounded-full ${sliderIndex === i ? 'bg-blue-300' : ' bg-slate-300'}`
        } onClick={()=>sliderInput(i)} ></div>
      })}
        </div>
      </div>
    
  )
}

export default Silder
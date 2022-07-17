import React from 'react'
import Slider from '../components/Silder';
import { useGlobalContext } from '../context';
import Product from '../components/Product';
const Home = () => {
  const { loading,ProductsData,sliderIndex } = useGlobalContext();
// console.log(sliderIndex,"home slider")
if (loading) {
    return <div className='z-20 bold absolute text-3xl w-screen h-screen bg-red-500 '><h2>Loading...</h2></div>
  }
return (
<div>
<div className='flex items-center justify-center h-screen w-screen'>
      <Slider {...ProductsData[sliderIndex].fields.image[0]} />
  </div>
      <div className='mx-20 grid grid-cols-3 place-items-center gap-2 mb-4'>
      {ProductsData.map((item, i) => {
        return <Product {...item.fields} key={item.id} id={i} />
      })}
     
      </div>
      </div>
  )
}

export default Home
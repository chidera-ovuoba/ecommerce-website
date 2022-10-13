import React from 'react'
import Slider from '../components/Silder';
import { useGlobalContext } from '../context';
import Product from '../components/Product';
import Products from './Products';
const Home = () => {
  const { loading,ProductsData,sliderIndex } = useGlobalContext();
// console.log(sliderIndex,"home slider")
if (loading) {
    return <div className='z-20 bold absolute text-3xl w-screen h-screen bg-red-500 '><h2>Loading...</h2></div>
  }
return (
<div> 
<div className='grid place-content-center pt-32'>
      <Slider {...ProductsData[sliderIndex].fields.image[0]} />
  </div>
      <Products/>
      </div>
  )
}

export default Home
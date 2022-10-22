import React from 'react'
import Slider from '../components/Silder';
import { useGlobalContext } from '../context';
import Product from '../components/Product';
import Products from './Products';
const Home = () => {
  const { loading,ProductsData,sliderIndex } = useGlobalContext();
if (loading) {
    return  <div class="container_loader">
        <div class="spinner">
            <div class="spinner-text">Loading...</div>
            <div class="spinner-sector spinner-sector-red"></div>
            <div class="spinner-sector spinner-sector-blue"></div>
            <div class="spinner-sector spinner-sector-green"></div>
        </div>
    </div>
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
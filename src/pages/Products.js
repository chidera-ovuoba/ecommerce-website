import React from 'react'
import Product from '../components/Product';
import { useGlobalContext } from '../context';
const Products = () => {
  const {ProductsData } = useGlobalContext();
  return (
    <div className='mx-20'>
      {ProductsData.map((item, i) => {
        return <Product {...item.fields} key={i} />
      })}
     
      </div>
  )
}

export default Products
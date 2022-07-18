import React from 'react'
import Product from '../components/Product';
import { useGlobalContext } from '../context';
const Products = () => {
  const {ProductsData,searchTerm } = useGlobalContext();
  return (
    <div className='mx-20 grid grid-cols-3 place-items-center gap-2 mb-4 pt-44'>
      {ProductsData.filter((item)=> searchTerm ? item.fields.name.includes(searchTerm):item).map((item, i) => {
        return <Product {...item.fields} key={item.id} id={i} />
      })}
     
      </div>
  )
}

export default Products
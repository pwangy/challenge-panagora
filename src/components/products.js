import React from 'react'

import items from '../data/products.json'
import { ProdCard } from './ProdCard'

export const Products = () => {
  return (
    <>
      <div className='container'>
        {items.map((item) => (
          <ProdCard key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}
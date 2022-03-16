import React from 'react'

import items from '../data/products.json'
// import { ProdCard } from './ProdCard'

export const Product = ({id, name, price, currency}) => {
  const params = useParams()
  const findItem =  items.find((item) => item.id === params.id)

  return (
    <div className='container'>
      <img src={`..${findItem.image}`} alt={`image of ${findItem.name}`}/>
      <p className='prodName'>{name}</p>
      <p>{price}&nbsp;{currency}</p>
      
    </div>
  )
}
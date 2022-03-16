import React from 'react'
import { useParams } from 'react-router-dom'

import items from '../data/products.json'

export const Product = () => {
  const params = useParams()
  const findItem =  items.find((item) => item.slug === params.slug)
  
  const handleSubmit = e => {
    e.preventDefault()
    alert('Item has been added to your cart')
  }

  return (
    <div className='container'>
      <div className='productImg'>
        <img src={`..${findItem.image}`} alt={`image of ${findItem.name}`}/>
      </div>
      <div className='prodInfo'>
        <h1 className='prodName'>{findItem.name}</h1>
          <h3>{findItem.price}&nbsp;{findItem.currency}</h3>
          <button 
            onClick={handleSubmit}
            type='submit'
            >
            add to cart
          </button>
          <hr />
          <p>{findItem.description}</p>
      </div>
    </div>
  )
}
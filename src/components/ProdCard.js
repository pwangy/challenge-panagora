import React from 'react'
import { Link } from 'react-router-dom'

export const ProdCard = ({ id, name, price, currency, slug, thumbnail }) => {
  return (
    <Link key={id} to={`/products/${slug}`}>
      <div className='card' id={id} slug={slug}>
        <img src={`..${thumbnail}`} />
        <p className='prodName'>{name}</p>
        <p>{price}&nbsp;{currency}</p>
      </div>
    </Link>
  )
}
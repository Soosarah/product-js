import React from 'react'
import objet from './products';
export default function Price() {
  const price = objet.price;
  return (
    <div>
      <p>Price: ${price}</p>
    </div>

  )
}

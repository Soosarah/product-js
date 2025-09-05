import React from 'react'
import objet from './products';

export default function Image() {
  return (
    <div>
      <img src={objet.image} alt={objet.name} />
    </div>
  )
}

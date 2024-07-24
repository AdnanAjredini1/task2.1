import React from 'react'

export default function Card({title, price, paragraph}) {
  return (
    <div className="card">
      <div className='content'>
         <p className='title' >{title}</p>
         <p className='price' >{price}</p>
         <p className='paragraph' style={{color:'#A0A0A0',textAlign:'center'}}>{paragraph}</p>
      </div>
      
      <button>Buy Now</button>
  </div>
  )
}

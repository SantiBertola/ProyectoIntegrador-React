import React from 'react'

import { FaShoppingCart } from "react-icons/fa"


const CartIcon = () => {
  return (
    <div>
      <FaShoppingCart style={{ color: '#e4584f', fontSize: '1.3rem', cursor: 'pointer'}}/>  
      <span>5</span>
    </div>
  )
}

export default CartIcon
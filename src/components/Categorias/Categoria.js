import React from 'react'
import { CategoriesButtons } from './CategoriasStyle'

const Categoria = ({ id, title, category}) => {
  return (
    <CategoriesButtons>
        <h2>{title}</h2>
    </CategoriesButtons>
  )
}

export default Categoria
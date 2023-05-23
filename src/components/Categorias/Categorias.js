import React from 'react'
import Categoria from './Categoria'
import { CategoriesContainer } from './CategoriasStyle'
import { Categories } from '../../data/Categories'


const Categorias = () => {

    return (
        <>
            <CategoriesContainer style={{ marginTop: "2rem" }}>
                {
                   Categories.map((category) => (
                    <Categoria key={category.id} {...category} />
                   ))  
                }
            </CategoriesContainer>
        </>

    )
}

export default Categorias
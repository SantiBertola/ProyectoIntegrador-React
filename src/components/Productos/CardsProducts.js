import React from 'react'
import { ProductosCard, ProductosContainer, ShowMoreButton, ButtonContainer } from './CardsProductsStyled';
import { products } from '../../data/Products';
import CardProduct from './CardProduct';

const CardsProducts = () => {
  return (
    <>
      <ProductosContainer>
        {
          products.map(product => (
            <CardProduct key={product.id} {...product}/>
          ))
        }
      </ProductosContainer>

      <ButtonContainer>
        <ShowMoreButton>Ver más</ShowMoreButton>
      </ButtonContainer>


    </>
  )
}

export default CardsProducts
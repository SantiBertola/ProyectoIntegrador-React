import React from 'react'
import { ProductosCard, CardTittles, PriceContainer, ShowMoreButton } from './CardsProductsStyled'


const CardProduct = ({ id, name, product, price, category, cardImg }) => {
    return (
        <ProductosCard>
            <img src={cardImg} alt={name} />
            <CardTittles>
                <h2>{name}</h2>
                <p>{product}</p>
            </CardTittles>
            <PriceContainer>
                <ShowMoreButton>{price}</ShowMoreButton>
            </PriceContainer>

        </ProductosCard>
    )
}

export default CardProduct
import React from 'react'
import { ProductosCard, CardTittles, PriceContainer, ButtonContainer } from './CardsProductsStyled'


const CardProduct = ({ id, name, product, price, category, cardImg }) => {
    return (
        <ProductosCard>
            <img src={cardImg} alt={name} />
            <CardTittles>
                <h2>{name}</h2>
                <p>{product}</p>
            </CardTittles>
            <PriceContainer>
                <ButtonContainer>{price}</ButtonContainer>
            </PriceContainer>

        </ProductosCard>
    )
}

export default CardProduct
import React from 'react'
import { HeroContainerStyled, HeroInfo, HeroLinks, HeroSearchBarStyled, IconWrapperStyled } from './HeroStyled'
import HeroImg from "../../assets/img/Hero-Jordan.png"
import Button from '../UI/Button/Button'
import { AiOutlineSearch } from 'react-icons/ai';


const Hero = () => {




  return (
    <HeroContainerStyled>
      <HeroInfo>
        <h2>All-Star Basketball</h2>
        <h4>Tu tienda favorita de NBA en Argentina</h4>
        <HeroLinks>
          <HeroSearchBarStyled
            type='text'
            placeholder='Ejemplo: Ropa de hombres'
          />
          <Button>Buscar</Button>
        </HeroLinks>

      </HeroInfo>
      <img src={HeroImg} alt='HeroImg' />
    </HeroContainerStyled>
  )
}

export default Hero
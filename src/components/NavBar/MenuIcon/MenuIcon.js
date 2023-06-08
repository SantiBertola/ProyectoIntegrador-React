import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { MenuContainer } from './MenuIconStyles';

const MenuIcon = () => {

    const dispatch = useDispatch();

  return (
    <MenuContainer>
        <FaBars style={{width:'50px', height: '50px', display: 'none'}}/>
    </MenuContainer>
  )
}

export default MenuIcon
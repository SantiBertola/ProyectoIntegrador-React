import React from 'react'
import { NavbarContainerStyled, NavbarLinks, Imagen, CartStyled } from './NavBarStyled'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import Menu from '../../assets/img/Menu.png'
import CartIcon from './CartIcon/CartIcon'


const NavBar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div>
                <Imagen src={Menu} style={{width: '50%', height: '50%'}}/>
            </div>


            <NavbarLinks>
                <Link to="/">Inicio</Link>
                <Link to="https://www.nba.com/schedule" target='_blank'>NBA</Link>
                <Link to="/productos">Productos</Link>
                <CartStyled>
                    <CartIcon />
                </CartStyled>
                <Link to="/register">Registrate</Link>

            </NavbarLinks>
        </NavbarContainerStyled>
    )
}

export default NavBar
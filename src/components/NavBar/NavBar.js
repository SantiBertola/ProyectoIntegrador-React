import React from 'react'
import { NavbarContainerStyled, NavbarLinks, CartStyled, UserNavStyled, UserContainerStyled, } from './NavBarStyled'
import Logo from '../../assets/img/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import CartIcon from './CartIcon/CartIcon'
import ModalCart from './ModalCart/ModalCart'
import ModalUser from './ModalUser/ModalUser'
import MenuIcon from './MenuIcon/MenuIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenMenu } from '../../redux/user/userSlice'


const NavBar = () => {

    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <NavbarContainerStyled>
            <ModalCart />
            <ModalUser />
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div>
                <MenuIcon />
            </div>


            <NavbarLinks>
                <Link to="/">Inicio</Link>
                <Link to="https://www.nba.com/schedule" target='_blank'>NBA</Link>
                <Link to="/productos">Productos</Link>
                <CartStyled>
                    <CartIcon />
                </CartStyled>
                <UserNavStyled>
                    <UserContainerStyled onClick={() =>
                        currentUser ? dispatch(toggleHiddenMenu()) : navigate('/register')
                    }>
                        <span>{
                            currentUser ? `${currentUser.nombre}` : 'Registrate'
                        }</span>
                    </UserContainerStyled>
                </UserNavStyled>

            </NavbarLinks>
        </NavbarContainerStyled>
    )
}

export default NavBar
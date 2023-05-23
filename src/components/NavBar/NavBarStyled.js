import styled from "styled-components";


export const NavbarContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 10vh;
    padding: 0px 30px 0px 30px;
    top: 0;
    position: fixed;
    z-index: 2;
    background-color: #404d54;
`

export const NavbarLinks = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    width: 30%;

    & a {
        color: #cc564f;
        font-size: 20px;
    }

    & a:hover {
        color: #b55450;
        text-decoration: underline;
    }

    @media (max-width: 992px) {
        position: absolute;
        top: 120px;
        left: 5%;
        right: 5%;
        width: 90%;
        flex-direction: column;
        background-color: #2b3438;
        border: 3px solid #e4584f;
        border-top: 0px;
        border-radius: 0px 0px 15px 15px;
        padding: 45px 30px;
        gap: 25px;
        z-index: 3;
        display: none;
    }
`

export const Imagen = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const CartStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid #2b3438;
    color: #2b3438;
    background-color: #e4584f;
    font-size: 1rem;
  }
`;
import React from 'react'

import {
    LoginInput, Form, LoginContainerStyled, LoginEmailStyled, Submit
} from '../Login/LoginStyles';

const Login = () => {
    return (
        <LoginContainerStyled>
            <h1 style={{ color: '#e4584f', padding: '5px' }}>Accede a la plataforma</h1>
            <Form>
                <LoginInput type='text' name='username' placeholder='Nombre de usuario' />
                <LoginInput type='password' name='password' placeholder='Contraseña' />

                <LoginEmailStyled to='/register'>
                    <p>¿No tienes una cuenta? Registrate aquí</p>
                </LoginEmailStyled>
                <Submit type='button'>
                    Iniar sesión 
                </Submit>
            </Form>
        </LoginContainerStyled>

    )
}


export default Login
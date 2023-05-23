import React from 'react'


import {
    LoginInput, Form,
    LoginContainerStyled,
    LoginEmailStyled,
    Submit,
} from '../Register/RegisterStyles';






const Register = () => {
    return (
            <LoginContainerStyled>
                <h1 style={{color: '#e4584f', padding: '5px'}}>¿Primera vez por aquí? Registrate con tus datos</h1>
                <Form>
                    <LoginInput type='text' name='name' placeholder='Nombre' />
                    <LoginInput type='text' name='username' placeholder='Nombre de usuario' />
                    <LoginInput type='text' name='email' placeholder='Email' />
                    <LoginInput type='date' name='birthday' placeholder='Fecha de nacimiento' />
                    <LoginInput type='password' name='password' placeholder='Contraseña' />

                    <LoginEmailStyled to='/login'>
                        <p>¿Ya tenes cuenta? Inicia sesión</p>
                    </LoginEmailStyled>
                    <Submit type='button'>
                        Registrarte
                    </Submit>
                </Form>
            </LoginContainerStyled>
    )
}

export default Register
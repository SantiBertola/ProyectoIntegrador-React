import React from 'react'


import {
    Form,
    LoginContainerStyled,
    LoginEmailStyled,
} from '../Register/RegisterStyles';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { registerInitialValues } from '../../formik/InitialValues';
import { registerValidationSchema } from '../../formik/ValidationSchema';
import { createUser } from '../../axios/axios.user';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useRedirect } from '../../hooks/useRedirect';
import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';






const Register = () => {

    const dispatch = useDispatch();
    const { state } = useLocation();

    useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/')

    return (
        <LoginContainerStyled>
            <h1 style={{ color: '#e4584f', padding: '5px' }}>¿Primera vez por aquí? Registrate con tus datos</h1>
            <Formik
                initialValues={registerInitialValues}
                validationSchema={registerValidationSchema}
                onSubmit={async (values, actions) => {
                    const user = await createUser(values.name, values.email, values.password)
                    actions.resetForm()
                    if (user) {
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                    }
                }}
            >
                <Form>
                    <LoginInput type='text' name='name' placeholder='Nombre' />
                    <LoginInput type='text' name='email' placeholder='Email' />
                    <LoginInput type='password' name='password' placeholder='Contraseña' />

                    <LoginEmailStyled to='/login'>
                        <p>¿Ya tenes cuenta? Inicia sesión</p>
                    </LoginEmailStyled>
                    <Submit type='button'>
                        Registrarte
                    </Submit>
                </Form>
            </Formik>

        </LoginContainerStyled>
    )
}

export default Register
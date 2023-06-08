import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo obligatorio'),
    cellphone: Yup.string().required('Campo obligatorio'),
    location: Yup.string().required('Campo obligatorio'),
    address: Yup.string().required('Campo obligatorio'),

})


export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo obligatorio'),
    email: Yup.string().required('Campo obligatorio'),
    password: Yup.string().min(8, 'La contraseña es demasiado corta').required('Campo obligatorio')
})


export const loginValidationSchema = Yup.object({
    email: Yup.string().required('Campo obligatorio'),
    password: Yup.string().min(8, 'La contraseña es demasiado corta').required('Campo obligatorio')
})
import React from 'react'
import { ButtonInput, FormInput, Formulario, InputContainers, SelectInput, TextAreaInput } from "./NewsletterStyles"


const Newsletter = () => {
    return (
        <Formulario>


            <InputContainers>
                <label for="name" style={{fontWeight:"600"}}>NOMBRE: </label>
                <FormInput type="text" id="name" placeholder="Ingrese su nombre" required />
                <small></small>
            </InputContainers>
            <InputContainers>
                <label for="lastName" style={{fontWeight:"600"}}>APELLIDO: </label>
                <FormInput type="text" id="lastName" placeholder="Ingrese su apellido" required />
                <small></small>
            </InputContainers>
            <InputContainers>
                <label for="mail" style={{fontWeight:"600"}}>G-MAIL: </label>
                <FormInput type="email" id="mail" placeholder="Ingrese su correo electrónico" required />
                <small></small>
            </InputContainers>
            <InputContainers>
                <label for="phone" style={{fontWeight:"600"}}>TÉLEFONO: </label>
                <FormInput type="phone" id="phone" placeholder="Ingrese su número de télefono" required />
                <small></small>
            </InputContainers>
            <InputContainers>

                <label for="genero" style={{fontWeight:"600"}}>GENERO:</label>
                <SelectInput name="genero" id="genero" required>
                    <option value="Tugenero" disabled>Elige tu genero</option>
                    <option value="menos18">Hombre</option>
                    <option value="1925">Mujer</option>
                    <option value="2635">Prefiero no decirlo</option>
                </SelectInput>
            </InputContainers>

            <InputContainers>

                <label for="edad" style={{fontWeight:"600"}}>EDAD: </label>
                <SelectInput name="edad" id="edad" required>
                    <option value="Tuedad" disabled>Elige tu rango de edad</option>
                    <option value="menos18">Menos de 18 años</option>
                    <option value="1925">19 a 25 años</option>
                    <option value="2635">26 a 35 años</option>
                    <option value="3650">36 a 50 años</option>
                    <option value="mas51">Más de 51 años</option>
                </SelectInput>
            </InputContainers>
            <InputContainers>
                <label for="sugest" style={{fontWeight:"600"}}>SUGERENCIAS Y COMENTARIOS: </label>
                <TextAreaInput id="sugest" cols="30" rows="5"
                    placeholder="Cosas a mejorar, productos que les gustarían, opinión de la pagina, etc..."></TextAreaInput>
            </InputContainers>


            <ButtonInput type="submit" name="Envíar" id="subm"></ButtonInput>


        </Formulario>



    )
}

export default Newsletter
import styled from "styled-components";

export const Formulario = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    background-color: #2b3438ad;
    width: 40%;
    height: 40%;

    @media (max-width: 992px) {
        width: 100%;
        text-align: center;
    }

`

export const InputContainers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 100%;
    margin-top: 5px;

`


export const FormInput = styled.input`
    background-color: #2b3438;
    color: #cc564f;
    border: 1px solid #cc564f;
    padding: 5px;
    text-align: center;
    width: 50%;
    height: 25%;

    ::placeholder {
        color: #cc564f;
    }
`

export const SelectInput = styled.select`
    background-color: #2b3438;
    color: #cc564f;
    border: 1px solid #cc564f;
    padding: 5px;
    text-align: center;
    width: 50%;
    height: 25%;

    ::placeholder {
        color: #cc564f;
    }
`

export const TextAreaInput = styled.textarea`
    background-color: #2b3438;
    color: #cc564f;
    border: 1px solid #cc564f;
    width: 60%;
    height: 50%;

    ::placeholder {
        color: #cc564f;
    }
`

export const ButtonInput = styled.input`
    margin: 5px;
    padding: 5px;
    width: 30%;
    font-size: 14px;
    font-weight: 800;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid black;
    background-color: #cc564f;

    :hover {
        border: 2px solid #e4584f;
        color: #e4584f;
        background-color: #2b3438 ;
        transition: 0.5s all ease-in;
    }
`
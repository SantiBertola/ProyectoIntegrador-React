import styled from "styled-components";


export const CategoriesContainer = styled.div`
        display: flex;  
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (max-width: 992px) {
            flex-direction: column;
        }

`

export const CategoriesButtons = styled.button`
        background-color: #e4584f;
        border: 2px solid black;
        border-radius: 10px;
        padding: 5px;
        cursor: pointer;

    :hover {
        border: 2px solid #e4584f;
        color: #e4584f;
        background-color: #2b3438;
        transition: 0.3s all ease-in;
    }

    @media (max-width: 992px) {
        font-size: 0.9rem;
        width: 25%;
    }

`


import styled from "styled-components";
import { Link } from "react-router-dom";


export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  background-color: #2b3438ad;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: #e4584f;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;

export const LoginInput = styled.input`
    background-color: #2b3438;
    color: #cc564f;
    border: 1px solid #cc564f;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 80%;
    height: 35px;

    ::placeholder {
        color: #cc564f;
    }
`


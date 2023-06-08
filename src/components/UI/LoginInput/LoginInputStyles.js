import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  color: #cc564f;
  background-color: #2b3438;
  border-radius: 5px;
  padding: 5px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : '1px solid #cc564f;')};
  outline: none;
  text-align: center;

  ::placeholder {
    opacity: 80%;
    color: #cc564f;
  }
  -webkit-text-fill-color:  #cc564f;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #2b3438 inset;
  }

`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
  text-align: center;
`;

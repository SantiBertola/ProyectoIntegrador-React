import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1.5rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.input`
  background-color: #e4584f;
  border: ${({ isError }) => (isError ? '1px solid #ff3816; ' : '2px solid black')};
  border-radius: 8px;
  height: 35px;
  padding: 1rem 1rem;
  color: black;
  width: 80%;

  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #e4584f inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #ff3816;
  font-size: 14px;
`;

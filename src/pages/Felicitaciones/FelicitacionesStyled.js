import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
`;

export const TitleStyled = styled.h1`
  color: #cc564f;
  font-size: 3rem ;
  text-align: center;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    color: #cc564f;
    font-size: 2rem ;
    margin-bottom: 50px;
  }
`;

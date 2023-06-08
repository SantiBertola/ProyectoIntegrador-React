import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <ContainerInfoStyled>
          <TitleStyled>¡Gracias por tu compra!</TitleStyled>
          <p>Te enviaremos a tu mail cuando este en camino</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
    </div>
  );
};

export default Felicitaciones;

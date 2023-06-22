import { useNavigate } from 'react-router-dom';
import GIF from '../../assets/img/giphy1.gif'

import Button from '../../components/UI/Button/Button';

import {
  CongratulationsStyled,
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <CongratulationsStyled>
      <TextStyled>
        <ContainerInfoStyled>
          <TitleStyled>¡Gracias por tu compra!</TitleStyled>
          <p>Te enviaremos a tu mail cuando este en camino</p>
          <img src={GIF} />
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
    </CongratulationsStyled>
  );
};

export default Felicitaciones;

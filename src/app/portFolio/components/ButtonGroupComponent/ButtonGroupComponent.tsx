import { ButtonGroup, RetroButton } from './styles/ButtonGroupComponent.styles';
import useDownloadPDF from '../../hooks/useDownloadPDF/useDownloadPDF';

const ButtonGroupComponent = () => {
  const { downloadPDF } = useDownloadPDF();
  return (
    <ButtonGroup>
      <RetroButton variant="contained" onClick={downloadPDF}>
        Descargar CV
      </RetroButton>
      <RetroButton
        variant="outlined"
        as="a"
        href="https://wa.me/573015978780"
        {...{ target: '_blank', rel: 'noopener noreferrer' }}
      >
        Contacto
      </RetroButton>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;

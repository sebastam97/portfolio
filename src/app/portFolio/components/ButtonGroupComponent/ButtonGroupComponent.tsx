import React from 'react';
import { Button } from '@mui/material';
import { ButtonGroup } from './styles/ButtonGroupComponent.styles';
import useDownloadPDF from '../../hooks/useDownloadPDF/useDownloadPDF';

const ButtonGroupComponent = () => {
  const { downloadPDF } = useDownloadPDF();
  return (
    <ButtonGroup>
      <Button variant="contained" color="primary" onClick={downloadPDF}>
        Descargar CV
      </Button>
      <Button variant="outlined" color="primary" href="#contact">
        Contacto
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;

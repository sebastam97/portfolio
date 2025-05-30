import React from 'react';

import { Typography } from '@mui/material';
import AvatarComponent from '../components/AvatarComponent/AvatarComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent/ButtonGroupComponent';
import IconButtonGroupComponent from '../components/IconButtonGroupComponent/IconButtonGroupComponent';

function PortFolio() {
  return (
    <>
      <AvatarComponent />
      <Typography variant="h4" gutterBottom>
        Sebastian Tamayo Villalba
      </Typography>
      <ButtonGroupComponent />
      <IconButtonGroupComponent />
    </>
  );
}

export default PortFolio;

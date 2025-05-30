import { IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import { IconButtonGroup } from './styles/IconButtonGroupComponent.styles';

const IconButtonGroupComponent = () => {
  return (
    <IconButtonGroup>
      <IconButton
        color="inherit"
        href="https://www.linkedin.com/in/sebastian-tamayo-villalba-1a1a421a2"
        target="_blank"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://github.com/sebastam97"
        target="_blank"
      >
        <GitHub />
      </IconButton>
    </IconButtonGroup>
  );
};

export default IconButtonGroupComponent;

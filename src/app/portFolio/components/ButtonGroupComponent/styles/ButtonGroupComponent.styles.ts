import {
  ButtonGroup as MuiButtonGroup,
  Button as MuiButton
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonGroup = styled(MuiButtonGroup)({
  display: 'flex',
  gap: '16px',
  marginBottom: '16px'
});

export const RetroButton = styled(MuiButton)(({ variant }) => ({
  fontFamily: 'Press Start 2P',
  fontSize: '12px',
  padding: '10px 20px',
  border: '2px solid #000',
  backgroundColor: variant === 'contained' ? '#ffcc00' : '#fff',
  color: '#000',
  boxShadow: '4px 4px #000',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: variant === 'contained' ? '#e6b800' : '#f2f2f2'
  }
}));

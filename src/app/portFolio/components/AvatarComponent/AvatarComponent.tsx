import { AvatarStyled } from './styles/AvatarComponent.styles';

const AvatarComponent = () => {
  return (
    <AvatarStyled
      alt="Tu Foto"
      src={`${import.meta.env.BASE_URL}profile.jpeg`}
    />
  );
};

export default AvatarComponent;

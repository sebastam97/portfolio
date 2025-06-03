import AvatarComponent from '../components/AvatarComponent/AvatarComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent/ButtonGroupComponent';
import IconButtonGroupComponent from '../components/IconButtonGroupComponent/IconButtonGroupComponent';
import BlinkingCursor from '../components/Cursor/Cursor';
import Title from '../components/Title/Title';

function PortFolio() {
  return (
    <>
      <AvatarComponent />
      <Title>
        Sebastian Tamayo Villalba <BlinkingCursor />
      </Title>
      <ButtonGroupComponent />
      <IconButtonGroupComponent />
    </>
  );
}

export default PortFolio;

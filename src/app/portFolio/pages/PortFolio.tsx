import AvatarComponent from '../components/AvatarComponent/AvatarComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent/ButtonGroupComponent';
import BlinkingCursor from '../components/Cursor/Cursor';
import IconButtonGroupComponent from '../components/IconButtonGroupComponent/IconButtonGroupComponent';
import { ProjectsComponent } from '../components/ProjectsComponent/ProjectsComponent';
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
      <ProjectsComponent />
    </>
  );
}

export default PortFolio;

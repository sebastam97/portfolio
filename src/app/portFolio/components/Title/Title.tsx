import React from 'react';
import { TitlePixel } from './styles/Title.styles';

function Title({ children }: { children?: React.ReactNode }) {
  return <TitlePixel>{children}</TitlePixel>;
}

export default Title;

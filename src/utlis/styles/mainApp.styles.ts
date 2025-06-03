import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 16px;
`;
export const BackgroundPixels = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  opacity: 0.1;
  background-image:
    linear-gradient(to right, #4ade80 1px, transparent 1px),
    linear-gradient(to bottom, #4ade80 1px, transparent 1px);
  background-size: 8px 8px;
  mask-image: linear-gradient(to bottom, white, transparent);
`;

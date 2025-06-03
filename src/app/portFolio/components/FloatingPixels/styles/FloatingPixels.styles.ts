import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-10px) translateX(5px); }
  100% { transform: translateY(0px) translateX(0px); }
`;

export const PixelContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
`;

export const FloatingPixel = styled.div<{
  $x: number;
  $y: number;
  $size: number;
}>`
  position: absolute;
  left: ${(props) => props.$x}px;
  top: ${(props) => props.$y}px;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: #4ade80;
  opacity: 0.5;
  animation: ${float} 3s ease-in-out infinite;
`;

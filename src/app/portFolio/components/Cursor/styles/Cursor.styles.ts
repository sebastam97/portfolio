import styled, { keyframes } from 'styled-components';

export const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 0.75rem;
  height: 1.25rem;
  background-color: #4ade80;
  animation: ${blink} 1s infinite;
`;

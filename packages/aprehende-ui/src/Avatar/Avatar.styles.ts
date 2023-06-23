import styled from '@emotion/styled';

export const AvatarStyled = styled.div<{ picture?: string }>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 50%;
  background-size: cover;
  border: 1px solid black;
  background-position: center;
  background-repeat: no-repeat;
  ${({ picture }) => picture && `background-image: url(${picture});`}
`;

export const AvatarTextStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

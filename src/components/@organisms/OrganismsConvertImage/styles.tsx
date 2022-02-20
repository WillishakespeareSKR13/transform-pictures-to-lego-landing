import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type styledImageProps = {
  customCSS?: SerializedStyles;
};
export const StyledImage = styled.img<styledImageProps>`
  ${({ customCSS }) => customCSS}
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomWrapperTypes } from './types';

const AtomWrapperStyled = (props: AtomWrapperTypes) => css`
  display: flex;
  width: ${props?.width || `100%`};
  max-width: ${props?.maxWidth || `100%`};
  border: ${props?.border || `none`};
  outline: ${props?.outline || `none`};
  min-height: ${props?.minHeight || `initial`};
  max-height: ${props?.maxHeight || `initial`};
  height: ${props?.height || `max-content`};
  flex-direction: ${props?.flexDirection || `column`};
  justify-content: ${props?.justifyContent || `center`};
  align-items: ${props?.alignItems || `flex-start`};
  background-image: ${props?.backgroundImage};
  background-color: ${props?.backgroundColor || `transparent`};
  background-position: center;
  background-size: ${props?.backgroundSize || `cover`};
  padding: ${props?.padding || `0px 0px 0px 0px`};
  margin: ${props?.margin || `0px 0px 0px 0px`};
  flex-wrap: ${props?.flexWrap || `nowrap`};
  ${props?.shadow && `box-shadow: 0px 10px 20px #00000029`};
  border-radius: ${props?.borderRadius || `0px`};
  ${`overflow-x:${props?.overflowX}`};
  z-index: ${props?.zIndex || `0`};
  position: ${props?.position || `static`};
  cursor: ${props?.cursor || `default`};
  mix-blend-mode: ${props?.mixBlendMode || `normal`};

  ${props?.customCSS};
`;

export const AtomWrapperDefaultStyled = styled(motion.div)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperFormStyled = styled(motion.form)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperSectionStyled = styled(
  motion.section
)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

export const AtomWrapperLiStyled = styled(motion.li)<AtomWrapperTypes>`
  ${(props) => AtomWrapperStyled(props)};
`;

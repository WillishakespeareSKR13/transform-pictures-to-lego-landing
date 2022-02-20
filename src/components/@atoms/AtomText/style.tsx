import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomTextTypes } from './types';

const TextStyle = (props: AtomTextTypes) => css`
  line-height: 150%;
  font-family: ${props?.font || `'Montserrat', sans-serif`};
  color: ${props?.color || `#202124`};
  text-align: ${props?.align || `left`};
  padding: ${props?.padding || `0px 0px 0px 0px`};
  margin: ${props?.margin || `0px 0px 0px 0px`};
  width: ${props?.width || `max-content`};
  max-width: ${props?.maxWidth || `100%`};
  font-size: ${props?.fontSize || `14px`};
  font-weight: ${props?.fontWeight || 500};
  text-decoration: ${props?.textDecoration || `none`};
  cursor: ${props?.cursor || `pointer`};
  * {
    cursor: ${props?.cursor || `pointer`};
  }

  ${props?.customCSS};
`;

export const TextStyledDefault = styled(motion.span)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledA = styled(motion.a)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledP = styled(motion.p)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH1 = styled(motion.h1)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH2 = styled(motion.h2)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH3 = styled(motion.h3)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH4 = styled(motion.h4)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH5 = styled(motion.h5)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
export const TextStyledH6 = styled(motion.h6)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;

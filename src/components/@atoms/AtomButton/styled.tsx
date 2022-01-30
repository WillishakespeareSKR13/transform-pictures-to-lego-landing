import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomButtonTypes } from './types';

export const ButtonStyled = styled(motion.button)<AtomButtonTypes>`
  width: ${({ width }) => width || `max-content`};
  height: ${({ height }) => height || `max-content`};
  color: ${({ color }) => color || `#ffffff`};
  background-color: ${({ backgroundColor }) => backgroundColor || `#3baaff`};
  background-image: ${({ backgroundImage }) => backgroundImage || `none`};
  padding: ${({ padding }) => padding || `10px 30px`};
  margin: ${({ margin }) => margin || `0px 0px 0px 0px`};
  cursor: ${({ cursor }) => cursor || `pointer`};
  text-shadow: ${({ textShadow }) => textShadow || `none`};
  font-size: ${({ fontSize }) => fontSize || `14px`};
  font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  border: ${({ border }) => border || `none`};
  border-radius: ${({ borderRadius }) => borderRadius || `4px`};
  line-height: 150%;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #e6e6e6;
      color: #7e7e7e;
    `}

  ${({ customCSS }) => customCSS};
`;

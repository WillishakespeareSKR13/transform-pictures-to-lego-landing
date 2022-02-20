import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';

export interface AtomNextImageTypes {
  src: string;
  alt: string;
}

export interface AtomImageTypes extends MotionProps {
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  objectFit?: `fill` | `contain` | `cover` | `none` | `scale-down`;
  margin?: string;
  position?:
    | `absolute`
    | `relative`
    | `static`
    | `sticky`
    | `fixed`
    | `initial`;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  objectPosition?: string;
  zIndex?: string;
  customCSS?: SerializedStyles;
}

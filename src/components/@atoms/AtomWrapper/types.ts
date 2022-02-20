/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';
import { RefObject } from 'react';

export interface AtomWrapperTypes extends MotionProps {
  backgroundImage?: string;
  maxHeight?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap';
  mixBlendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity';
  shadow?: boolean;
  maxWidth?: string;
  minHeight?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  border?: string;
  outline?: string;
  width?: string;
  height?: string;
  zIndex?: string;
  overflowX?: string;
  onSubmit?: () => void;
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
  cursor?:
    | 'pointer'
    | 'default'
    | 'text'
    | 'wait'
    | 'move'
    | 'not-allowed'
    | 'help'
    | 'zoom-in'
    | 'zoom-out'
    | 'context-menu'
    | 'cell'
    | 'crosshair'
    | 'vertical-text'
    | 'alias'
    | 'progress'
    | 'no-drop'
    | 'copy'
    | 'grab'
    | 'grabbing'
    | 'all-scroll'
    | 'col-resize'
    | 'row-resize'
    | 'n-resize'
    | 'e-resize'
    | 's-resize'
    | 'w-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'ew-resize'
    | 'ns-resize'
    | 'nesw-resize'
    | 'nwse-resize'
    | 'zoom-in'
    | 'zoom-out'
    | 'grab'
    | 'grabbing'
    | 'custom';
  asWrapper?: string;
  as?: 'div' | 'form' | 'section' | 'li';
  refObject?: RefObject<any>;
  customCSS?: SerializedStyles;
  dangerouslySetInnerHTML?: { __html: string };
}

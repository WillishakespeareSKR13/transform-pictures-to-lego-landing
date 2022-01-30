import { SerializedStyles } from '@emotion/utils/types/index';
import { MotionProps } from 'framer-motion';

export interface AtomButtonTypes extends MotionProps {
  color?: string;
  width?: string;
  height?: string;
  type?: `button` | `submit` | `reset`;
  disabled?: boolean;
  onClick?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  onHoverStart?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  onHoverEnd?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  fontSize?: string;
  font?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textShadow?: string;
  border?: string;
  borderRadius?: string;
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
  customCSS?: SerializedStyles;
}

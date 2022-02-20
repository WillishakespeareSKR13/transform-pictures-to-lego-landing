import { FC } from 'react';
import { AtomWrapperTypes } from './types';
import {
  AtomWrapperDefaultStyled,
  AtomWrapperFormStyled,
  AtomWrapperSectionStyled,
  AtomWrapperLiStyled,
} from './style';

const DefaultAnimation = {
  transition: {
    default: { duration: 0.3 },
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Wrapper: FC<AtomWrapperTypes> = (props) => {
  const { children, refObject, as } = props;

  switch (as) {
    case 'form':
      return (
        <AtomWrapperFormStyled ref={refObject} {...DefaultAnimation} {...props}>
          {children}
        </AtomWrapperFormStyled>
      );
    case 'section':
      return (
        <AtomWrapperSectionStyled
          ref={refObject}
          {...DefaultAnimation}
          {...props}
        >
          {children}
        </AtomWrapperSectionStyled>
      );
    case 'li':
      return (
        <AtomWrapperLiStyled ref={refObject} {...DefaultAnimation} {...props}>
          {children}
        </AtomWrapperLiStyled>
      );

    default:
      return (
        <AtomWrapperDefaultStyled
          ref={refObject}
          {...DefaultAnimation}
          {...props}
        >
          {children}
        </AtomWrapperDefaultStyled>
      );
  }
};

export default Wrapper;

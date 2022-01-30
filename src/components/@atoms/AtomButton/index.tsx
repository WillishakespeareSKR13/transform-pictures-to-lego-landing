import { FC } from 'react';
import { ButtonStyled } from './styled';
import { AtomButtonTypes } from './types';

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const AtomButton: FC<AtomButtonTypes> = (props) => {
  const { children, disabled } = props;
  return (
    <ButtonStyled {...(disabled ? {} : Animation)} {...props}>
      {children || `Text Default`}
    </ButtonStyled>
  );
};
export default AtomButton;

import { FC } from 'react';
import InputDragDrop from './inputDragDrop';
import { AtomInputTypes } from './types';

const Input: FC<AtomInputTypes> = (props) => {
  return <InputDragDrop {...props} />;
};

export default Input;

import { Reducer } from 'react';

const TypesReducers = {
  OPENSIDEBAR: (_: ModalReducerType, payload: ModalReducerType) => ({
    ...payload
  }),
  CLOSESIDEBAR: (): ModalReducerType => ({
    modal: false,
    id: '',
    size: '',
    sizeType: ''
  })
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: ModalReducerType;
};

export type ModalReducerType = {
  modal?: boolean;
  id?: string;
  size?: string;
  sizeType?: string;
};

export const initialState: ModalReducerType = {
  modal: false,
  id: '',
  size: '',
  sizeType: ''
};

const SideBarReducer: Reducer<ModalReducerType, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default SideBarReducer;

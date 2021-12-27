import { Reducer } from 'react';

const TypesReducers = {
  TOGGLESIDEBAR: (state: boolean, _: boolean) => !state,
  CLOSESIDEBAR: (): boolean => false
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: boolean;
};

const SideBarReducer: Reducer<boolean, UserAction> = (
  state = false,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default SideBarReducer;

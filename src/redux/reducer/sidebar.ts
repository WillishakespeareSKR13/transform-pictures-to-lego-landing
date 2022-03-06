import { Reducer } from 'react';

const TypesReducers = {
  TOGGLESIDEBAR: (state: SidebarReducerType, _: boolean) => !state,
  CLOSESIDEBAR: (): SidebarReducerType => false
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: SidebarReducerType;
};

export type SidebarReducerType = boolean;

export const initialState: SidebarReducerType = false;

const SideBarReducer: Reducer<SidebarReducerType, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default SideBarReducer;

import { combineReducers } from 'redux';
import SideBarReducer from './sidebar';
import UserReducer from './user';

const RootReducer = combineReducers({
  user: UserReducer,
  sideBar: SideBarReducer
});

export type RootStateType = ReturnType<typeof RootReducer>;

export default RootReducer;

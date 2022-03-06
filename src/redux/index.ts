/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import RootReducer from './reducer';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    }
  };
};

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

const PersistConfig = {
  key: 'root',
  storage,
  blacklist: ['modal', 'sideBar', 'quotation']
};

const PersistedReducer = persistReducer(PersistConfig, RootReducer);
const store = createStore(PersistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };

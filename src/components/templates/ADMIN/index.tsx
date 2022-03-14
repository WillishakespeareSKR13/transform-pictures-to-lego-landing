import { Routes, Route } from 'react-router-dom';
import Store from './Stores';
import StoreAdd from './Stores/store/add';
import StoreAddStoreType from './Stores/store/add/storeType';
import StoreEdit from './Stores/store/edit';
import StoreView from './Stores/store';

const ADMIN = () => {
  return (
    <Routes location={window.location.pathname.replace('/dashboard', '')}>
      <Route path="/" element={<Store />} />
      <Route path="/store/add" element={<StoreAdd />} />
      <Route path="/store/edit/:id" element={<StoreEdit />} />
      <Route path="/store/:id" element={<StoreView />} />
      <Route path="/store/add/storeType" element={<StoreAddStoreType />} />
    </Routes>
  );
};

export default ADMIN;

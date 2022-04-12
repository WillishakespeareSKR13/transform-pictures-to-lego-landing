import { ModalReducerType } from '../reducer/modal';

export const OpenModal = (payload: ModalReducerType) => ({
  type: 'OPENSIDEBAR',
  payload
});

export const CloseModal = () => ({
  type: 'CLOSESIDEBAR'
});

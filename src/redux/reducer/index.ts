import { combineReducers } from 'redux';
// import ModalReducer, { ModalReduceType } from './modal';
import SideBarReducer, { SidebarReducerType } from './sidebar';
import UserReducer, { UserReducerType } from './user';
import ModalReducer, { ModalReducerType } from './modal';
// import UserQuotation, { QuotationReduceType } from './quotation';
// import memberID, { MemberIDReduceType } from './memberId';
// import Customize, { CustomizeReducerType } from './customize';
// import surveyDetail, { SurveyDetailReducer } from './blog';

const RootReducer = combineReducers({
  user: UserReducer,
  sideBar: SideBarReducer,
  modal: ModalReducer
  // modal: ModalReducer,
  // quotation: UserQuotation,
  // memberID: memberID,
  // customize: Customize,
  // survey: surveyDetail
});

export type RootStateType = {
  user: UserReducerType;
  sideBar: SidebarReducerType;
  modal: ModalReducerType;
  // modal: ModalReduceType;
  // quotation: QuotationReduceType;
  // memberID: MemberIDReduceType;
  // customize: CustomizeReducerType;
  // survey: SurveyDetailReducer;
};

export default RootReducer;

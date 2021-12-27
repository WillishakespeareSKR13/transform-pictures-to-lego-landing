import { FC } from 'react';
import AdminLayout from './AdminLayout';
import DefaultLayout from './DefaultLayout';
import LoginLayout from './LoginLayout';
import ProfileLayout from './ProfileLayout';

export const AllLayouts = {
  login: LoginLayout,
  admin: AdminLayout,
  default: DefaultLayout,
  profile: ProfileLayout
};

export type LayoutType = {
  Layout?: keyof typeof AllLayouts;
  Role?: string | string[];
};

const LayoutContext: FC<LayoutType> = (props) => {
  const { Layout, children, Role } = props;
  const GetLayout = AllLayouts[Layout || 'default'];
  return <GetLayout Role={Role}>{children}</GetLayout>;
};

export default LayoutContext;

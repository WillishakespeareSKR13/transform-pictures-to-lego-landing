import { FC } from 'react';
import DefaultLayout from './_defaultLayout';
import PublicLayout from './_publicLayout';
import LoginLayout from './_loginLayout';
import DashboardLayout from './_dashboardLayout';

export const AllLayouts = {
  default: DefaultLayout,
  public: PublicLayout,
  login: LoginLayout,
  dashboard: DashboardLayout
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

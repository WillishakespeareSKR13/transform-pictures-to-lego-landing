import { RootStateType } from '@Src/redux/reducer';
import { NextPageFC } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import ADMIN from '@Templates/ADMIN';

const DASHBOARDS: { [key: string]: () => JSX.Element } = {
  ADMIN: ADMIN,
  DEFAULT: () => <div>DEFAULT</div>
};

const DashboardPage: NextPageFC = () => {
  const role = useSelector((state: RootStateType) => state?.user?.role?.name);
  return <>{DASHBOARDS[role ?? 'DEFAULT']()}</>;
};

export default DashboardPage;

DashboardPage.Layout = 'dashboard';

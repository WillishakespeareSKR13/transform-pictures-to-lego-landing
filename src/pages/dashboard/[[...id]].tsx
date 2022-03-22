import { RootStateType } from '@Src/redux/reducer';
import { NextPageFC } from 'next';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ADMIN from '@Templates/ADMIN';
import AGENT from '@Templates/AGENT';
import { BrowserRouter } from 'react-router-dom';

const DASHBOARDS: { [key: string]: () => JSX.Element } = {
  ADMIN: ADMIN,
  AGENT: AGENT,
  OWNER: ADMIN,
  DEFAULT: () => <div>DEFAULT</div>
};

const DashboardPage: NextPageFC = () => {
  const role = useSelector((state: RootStateType) => state?.user?.role?.name);
  const Dashboard = DASHBOARDS[role ?? 'DEFAULT'];
  const Routes = useMemo(
    () => (
      <BrowserRouter basename={'/dashboard'}>
        <Dashboard />
      </BrowserRouter>
    ),
    [window.location.pathname]
  );

  return <>{Routes}</>;
};

export default DashboardPage;

DashboardPage.Layout = 'dashboard';

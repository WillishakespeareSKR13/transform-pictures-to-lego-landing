import { Logout } from '@Src/redux/actions/user';
import { AtomButton, AtomText } from '@sweetsyui/ui';
import { NextPageFC } from 'next';
import React from 'react';
import { useDispatch } from 'react-redux';

const DashboardPage: NextPageFC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <AtomText color="white">DashboardPage</AtomText>
      <AtomButton
        onClick={() => {
          dispatch(Logout());
        }}
      >
        Logout
      </AtomButton>
    </div>
  );
};

export default DashboardPage;

DashboardPage.Layout = 'dashboard';

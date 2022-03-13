import { FC } from 'react';
import LayoutAnimation from '@sweetsyui/ui/build/@layouts/LayoutAnimation';
import { css } from '@emotion/react';
import { AtomButton, AtomWrapper, OrganismAdminSidebar } from '@sweetsyui/ui';
import AuthContext from '@Src/hooks/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '@Src/redux/actions/user';
import { RootStateType } from '@Src/redux/reducer';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  return (
    <AuthContext type="DASHBOARD">
      <LayoutAnimation
        minHeight="100vh"
        height="max-content"
        backgroundColor="transparent"
        customCSS={css`
          background-color: #2e2e35;
          z-index: -1;
          min-height: calc(100vh - 60px);
          margin-top: 60px;
          justify-content: flex-start;
          width: ${sideBar ? 'calc(100% - 300px)' : 'calc(100% - 80px)'};
          margin-left: ${sideBar ? '300px' : '80px'};
        `}
      >
        <AtomWrapper
          maxWidth="1440px"
          minHeight="100vh"
          height="max-content"
          alignItems="center"
          justifyContent="flex-start"
          customCSS={css`
            padding: 40px 90px;
            @media only screen and (max-width: 980px) {
              padding: 20px 30px;
            }
          `}
        >
          {children}
        </AtomWrapper>
      </LayoutAnimation>
      <AtomWrapper
        customCSS={css`
          z-index: 10;
          padding: 0px 90px;
          align-items: flex-end;
          top: 0px;
          background-color: #1a1a1f;
          height: 60px;
          position: fixed;
          width: ${sideBar ? 'calc(100% - 300px)' : 'calc(100% - 80px)'};
          margin-left: ${sideBar ? '300px' : '80px'};
        `}
      >
        <AtomButton
          padding="8px 20px"
          fontSize="10px"
          backgroundColor="#f1576c"
          borderRadius="2px"
          onClick={() => {
            dispatch(Logout());
            location.reload();
          }}
        >
          Sign Out
        </AtomButton>
      </AtomWrapper>
      <OrganismAdminSidebar
        componentsProps={{
          wrapperProps: {
            backgroundColor: '#202026'
          }
        }}
      />
    </AuthContext>
  );
};
export default DefaultLayout;

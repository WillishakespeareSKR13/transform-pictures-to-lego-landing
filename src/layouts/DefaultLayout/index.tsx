import { FC } from 'react';
import LayoutAnimation from '@sweetsyui/ui/build/@layouts/LayoutAnimation';
import AuthContext from '@Src/hooks/authContext';
import { OrganimsHeader } from '@Src/components/@organisms';
import { css } from '@emotion/react';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => (
  <AuthContext type="PUBLIC">
    <OrganimsHeader />
    <LayoutAnimation
      margin="90px 0 0 0"
      minHeight="calc(100% - 90px)"
      customCSS={css`
        background-image: url('/images/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >
      {children}
    </LayoutAnimation>
  </AuthContext>
);
export default DefaultLayout;

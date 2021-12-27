import { FC } from 'react';
import { LayoutAnimation } from '@sweetsyui/ui';

import AuthContext from '@Src/hooks/authContext';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => (
  <AuthContext type="DEFAULT">
    <LayoutAnimation
      margin="90px 0 0 0"
      minHeight="calc(100vh - 90px)"
      justifyContent="flex-start"
    >
      {children}
    </LayoutAnimation>
  </AuthContext>
);
export default DefaultLayout;

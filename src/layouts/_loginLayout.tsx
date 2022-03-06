import { FC } from 'react';
import LayoutAnimation from '@sweetsyui/ui/build/@layouts/LayoutAnimation';
import { css } from '@emotion/react';
import { AtomWrapper } from '@sweetsyui/ui';
import AuthContext from '@Src/hooks/authContext';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => (
  <AuthContext type="LOGIN">
    <LayoutAnimation
      minHeight="100vh"
      height="max-content"
      backgroundColor="transparent"
      customCSS={css`
        background-image: url('/images/image.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >
      <AtomWrapper
        maxWidth="1440px"
        minHeight="100vh"
        height="max-content"
        alignItems="center"
        justifyContent="flex-start"
        customCSS={css`
          @media only screen and (max-width: 980px) {
            padding: 0px 30px;
          }
        `}
      >
        {children}
      </AtomWrapper>
    </LayoutAnimation>
  </AuthContext>
);
export default DefaultLayout;

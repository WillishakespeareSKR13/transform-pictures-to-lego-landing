import { FC } from 'react';
import LayoutAnimation from '@sweetsyui/ui/build/@layouts/LayoutAnimation';
import { OrganismsHeader } from '@Src/components/@organisms';
import { css } from '@emotion/react';
import { AtomWrapper } from '@sweetsyui/ui';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => (
  <>
    <OrganismsHeader />
    <LayoutAnimation
      padding="90px 0 0 0"
      minHeight="calc(100% - 90px)"
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
        minHeight="calc(100vh - 90px)"
        height="max-content"
        padding="20px 90px"
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
  </>
);
export default DefaultLayout;

import { FC } from 'react';
import LayoutAnimation from '@sweetsyui/ui/build/@layouts/LayoutAnimation';
import { OrganismsHeader } from '@Src/components/@organisms';
import { css } from '@emotion/react';

type Props = {
  Role?: string | string[];
};

const DefaultLayout: FC<Props> = ({ children }) => (
  <>
    <OrganismsHeader />
    <LayoutAnimation
      padding="90px 0 0 0"
      minHeight="calc(100% - 90px)"
      backgroundColor="transparent"
      customCSS={css`
        background-image: url('/images/image.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >
      {children}
    </LayoutAnimation>
  </>
);
export default DefaultLayout;

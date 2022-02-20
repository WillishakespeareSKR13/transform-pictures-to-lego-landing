import { css } from '@emotion/react';
import { AtomWrapper } from '@sweetsyui/ui';
import { FC } from 'react';

const AtomPage: FC = (props) => {
  const { children } = props;
  return (
    <AtomWrapper
      maxWidth="1440px"
      minHeight="calc(100vh - 90px)"
      padding="0px 90px"
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
  );
};

export default AtomPage;

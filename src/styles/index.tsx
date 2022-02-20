import { FC } from 'react';
import { css, Global } from '@emotion/react';
import StylesGlobal from '@sweetsyui/ui/build/@styles/stylesglobal';

const GlobalStyles: FC = () => (
  <>
    <StylesGlobal />;
    <Global
      styles={css`
        html,
        body {
          background-color: #202024;
        }
      `}
    />
  </>
);

export default GlobalStyles;

import { FC } from 'react';
import { css, Global } from '@emotion/react';
import StylesGlobal from '@sweetsyui/ui/build/@styles/stylesglobal';

const GlobalStyles: FC = () => (
  <>
    <StylesGlobal />
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

export const TableStyles = css`
  width: 100%;
  color: #dfdfdf;
  font-weight: bold;
  thead {
    background-color: #1a1a1f !important;
    tr th {
      color: #dfdfdf;
    }
  }
  tbody {
    background-color: #202026;
    tr {
      :hover {
        background-color: #1a1a1f;
        color: #dfdfdf;
      }
      td {
        color: #dfdfdf;
        border-bottom: 1px solid #2e2e35;
      }
    }
  }
`;

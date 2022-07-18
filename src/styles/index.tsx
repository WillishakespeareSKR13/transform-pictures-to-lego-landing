import { FC } from 'react';
import { css, Global } from '@emotion/react';
import StylesGlobal from '@sweetsyui/ui/build/@styles/stylesglobal';

const GlobalStyles: FC = () => (
  <>
    <StylesGlobal scrollbarColor="#f1576c" />
    <Global
      styles={css`
        html,
        body {
          background-color: #202024;
        }
        ::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
      `}
    />
  </>
);

export default GlobalStyles;

export const TableStyles = css`
  width: 100%;
  overflow: visible;
  color: #dfdfdf;
  font-weight: bold;
  thead {
    background-color: #1a1a1f !important;
    border-bottom: 1px solid #2e2e35;
    tr th {
      color: #dfdfdf;
    }
  }
  tbody {
    background-color: #202026;
    tr {
      background-color: #202026;
      :hover {
        background-color: #1a1a1f;
        color: #dfdfdf;
      }
      td {
        color: #dfdfdf;
        border-bottom: 1px solid #2e2e35;
        padding: 10px 15px;
      }
    }
  }
`;
export const InputDatesStyles = css`
  input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 10px;
    opacity: 0.6;
    filter: invert(0.8);
  }
  input[type='date']::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
  }
`;
export const InputStyles = css`
  span {
    margin: 0px 0px 10px 0px;
    color: #dfdfdf;
    font-weight: 500;
  }
  span:last-of-type {
    color: #a83240;
  }
  input {
    border: 1px solid #1a1a1f;
    background-color: #202026;
    color: #dfdfdf;
    ::placeholder {
      color: #dfdfdf;
    }
  }
  select {
    border: 1px solid #1a1a1f;
    background-color: #202026;
    color: #dfdfdf;
    ::placeholder {
      color: #dfdfdf;
    }
  }
  textarea {
    height: 80px;
    padding: 10px;
    border: 1px solid #1a1a1f;
    background-color: #202026;
    color: #dfdfdf;
    ::placeholder {
      color: #dfdfdf;
    }
  }
`;

export const InputLightStyles = css`
  span {
    margin: 0px 0px 10px 0px;
    color: #dfdfdf;
    font-weight: 500;
  }
  span:last-of-type {
    color: #a83240;
  }
  input {
    border: 1px solid #1a1a1f;
    background-color: #2e2e35;
    color: #dfdfdf;
    ::placeholder {
      color: #dfdfdf;
    }
  }
`;

export const InputDragAndDropStyles = css`
  label {
    background-color: #202026;
    color: #dfdfdf;
  }
  span:last-of-type {
    color: #a83240;
  }
`;

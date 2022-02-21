import { FC } from 'react';
import { AppPropsWithLayout } from 'next/app';
import GlobalStyles from '@Src/styles';
import LayoutContext from '@Layouts/index';
import 'pintura/pintura.css';

const _App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  return (
    <LayoutContext Layout={Component.Layout} Role={Component.Role}>
      <GlobalStyles />
      <Component {...pageProps} />
    </LayoutContext>
  );
};

export default _App;

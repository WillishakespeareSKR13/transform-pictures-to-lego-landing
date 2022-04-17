import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppPropsWithLayout } from 'next/app';
import GlobalStyles from '@Src/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LayoutContext from '@Layouts/index';
import client from '@ApolloClient/index';
import '@Utils/pintura/pintura.css';
import AlertContext from '@Src/hooks/alertContext';
import { persistor, store } from '@Redux/index';
import JotaiProvider from '@Src/jotai';

const _App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  return (
    <JotaiProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AlertContext>
              <LayoutContext Layout={Component.Layout} Role={Component.Role}>
                <GlobalStyles />
                <Component {...pageProps} />
              </LayoutContext>
            </AlertContext>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </JotaiProvider>
  );
};

export default _App;

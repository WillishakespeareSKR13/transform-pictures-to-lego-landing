import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppPropsWithLayout } from 'next/app';
import GlobalStyles from '@Src/styles';
import AlertContext from '@Src/hooks/alertContext';
import LayoutContext from '@Layouts/index';
import client from '@Apollo/index';
import useStore from '@Redux/index';

const _App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const { persistor, store } = useStore();
  return (
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
  );
};

export default _App;

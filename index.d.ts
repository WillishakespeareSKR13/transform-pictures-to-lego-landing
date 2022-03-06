/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { LayoutType } from '@Layouts/index';
import type { AppInitialProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { IQueryFilter } from 'graphql';

declare module 'next/app' {
  export declare type AppPropsWithLayout<P = any> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P> & LayoutType;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
  };
}

declare module 'next' {
  import { ReactNode } from 'react';
  import { OperationVariables, QueryResult } from '@apollo/client';

  export declare type Layout = (page: ReactNode) => ReactNode;
  export declare type NextPageFC<P = any, IP = P> = NextPage<P, IP> &
    LayoutType;
  export declare type QueryTypeChildren = { children: ReactNode };
  export declare type QueryType = {
    data: IQueryFilter<'me'>;
    error?: any;
    loading: boolean;
    refetch: (
      variables?: OperationVariables
    ) => Promise<QueryResult<IQueryFilter<'me'>>>;
  };
  export declare type QueryTypeNode = {
    query: QueryType;
    role?: string | string[];
  };
}

declare module 'redux-persist/es/persistStore' {
  import { Store, Action, AnyAction } from 'redux';
  import { PersistorOptions, Persistor } from 'redux-persist/es/types';

  export default function persistStore<
    S = any,
    A extends Action<any> = AnyAction
  >(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any
  ): Persistor;
}

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
  // split
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import CONFIG from '@Config/index';
import cookie from 'js-cookie';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: `${CONFIG.GRAPHQL_URL}`
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    orgcode: CONFIG.ORG_CODE,
    authorization: `Bearer ${cookie.get(`bearer`)}`
  }
}));

// const isBrowser = typeof window !== 'undefined';

// const wsLink = new WebSocketLink({
//   uri: `${CONFIG.GRAPHQL_URL_WS}`,
//   options: {
//     reconnect: true
//   }
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription' &&
//       isBrowser
//     );
//   },
//   httpLink,
//   wsLink
// );

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (
    graphQLErrors &&
    !graphQLErrors.filter((error) => error.message === `INVALID_TOKEN`)
  )
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.warn(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.warn(`[Network error]: ${networkError}`);
});

const link = errorLink.concat(authLink.concat(httpLink));

const client = new ApolloClient({
  link,
  ssrMode: true,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  queryDeduplication: true
});

export default client;

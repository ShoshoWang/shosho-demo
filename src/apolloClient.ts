import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://my-first-worker.cayleyws.workers.dev/graphql', // 替换为你的 Worker URL
  }),
  cache: new InMemoryCache(),
});

export default client;
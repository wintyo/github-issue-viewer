import { createApp, provide, h } from 'vue';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';

const GITHUB_TOKEN = localStorage.getItem('GITHUB_TOKEN') || '';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});
const authLink = setContext((_, { headers }) => {
  console.log(headers);
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  };
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.mount('#app');

import { createApp, watch, provide, h } from 'vue';
import { createPinia } from 'pinia';
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

const pinia = createPinia();
app.use(pinia);

app.mount('#app');

// localStorageに保存する
watch(
  pinia.state,
  (newState) => {
    console.log(newState);
    localStorage.setItem('piniaState', JSON.stringify(newState));
  },
  {
    deep: true,
  }
);

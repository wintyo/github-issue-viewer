<script setup lang="ts">
import { reactive } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useGitHubStore } from './store/github';

const tokenForm = reactive<{
  githubToken: string;
}>({
  githubToken: localStorage.getItem('GITHUB_TOKEN') || '',
});

const saveGitHubToken = () => {
  localStorage.setItem('GITHUB_TOKEN', tokenForm.githubToken);
};

const githubStore = useGitHubStore();

const state = reactive({
  last: 1,
});

const { result } = useQuery(gql`
  query {
    viewer {
      login
    }
  }
`);

const variables = reactive({
  last: 1,
});

const { result: result2 } = useQuery(
  gql`
    query getIssues($last: Int) {
      viewer {
        login
        issues(last: $last, filterBy: {}) {
          edges {
            node {
              id
              url
              number
              closed
              closedAt
              body
              title
              editor {
                login
              }
              assignees(last: 10) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
  githubStore.request
);

const onChangeLast = (event: Event) => {
  if (!(event.currentTarget instanceof HTMLInputElement)) {
    return;
  }
  githubStore.setLast(event.currentTarget.valueAsNumber);
};
</script>

<template lang="pug">
div
  h1 Issue Viewer
  div
    span GITHUB TOKEN:
    input(v-model='tokenForm.githubToken', type='password')
    button(@click='saveGitHubToken') save
  input(
    :value='githubStore.request.last',
    type='number',
    @change='onChangeLast'
  )
  div {{ result }}
  div {{ result2 }}
</template>

<style lang="scss" scoped></style>

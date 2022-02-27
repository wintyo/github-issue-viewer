<script setup lang="ts">
import { reactive } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const tokenForm = reactive<{
  githubToken: string;
}>({
  githubToken: localStorage.getItem('GITHUB_TOKEN') || '',
});

const saveGitHubToken = () => {
  localStorage.setItem('GITHUB_TOKEN', tokenForm.githubToken);
};

const { result } = useQuery(gql`
  query {
    viewer {
      login
    }
  }
`);

const { result: result2 } = useQuery(gql`
  query {
    viewer {
      login
      issues(last: 10, filterBy: {}) {
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
`);
</script>

<template lang="pug">
div
  h1 Issue Viewer
  div
    span GITHUB TOKEN:
    input(v-model='tokenForm.githubToken', type='password')
    button(@click='saveGitHubToken') save
  div Hello World!
  div {{ result }}
  div {{ result2 }}
</template>

<style lang="scss" scoped></style>

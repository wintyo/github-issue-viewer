<script setup lang="ts">
import { reactive, computed } from 'vue';
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

const repoForm = reactive<{
  repoOwner: string;
  repoName: string;
}>({
  repoOwner: githubStore.repository.owner,
  repoName: githubStore.repository.name,
});

const saveTargetRepository = () => {
  githubStore.setRepoOwner(repoForm.repoOwner);
  githubStore.setRepoName(repoForm.repoName);
};

const state = reactive({
  last: 1,
});

const variables = computed(() => {
  return {
    searchQuery: [
      `repo:${githubStore.repository.owner}/${githubStore.repository.name}`,
      'is:issue',
      'is:closed',
      'closed:>2022-02-20',
    ].join(' '),
  };
});

const { result } = useQuery(
  gql`
    query searchIssues($searchQuery: String!) {
      search(query: $searchQuery, type: ISSUE, last: 10) {
        edges {
          node {
            ... on Issue {
              id
              number
              title
              url
              body
              labels(last: 10) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
              closed
              closedAt
              assignees(last: 5) {
                edges {
                  node {
                    id
                    name
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
  variables
);

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
  div
    div TARGET GITHUB REPOSITORY
    input(v-model='repoForm.repoOwner', placeholder='Owner')
    input(v-model='repoForm.repoName', placeholder='Name')
    button(@click='saveTargetRepository') save
  input(
    :value='githubStore.request.last',
    type='number',
    @change='onChangeLast'
  )
  div(v-if='result')
    template(v-for='edge in result.search.edges')
      .issue-block
        a(:href='edge.node.url', target='_blank') {{ edge.node.title }}
        div
          span labels: {{ edge.node.labels.edges.map((labelEdge: any) => labelEdge.node.name).join(', ') }}
        div {{ edge.node.body }}
  //- div {{ result2 }}
</template>

<style lang="scss" scoped>
.issue-block {
  padding: 5px;
  border: solid 1px #ccc;
  white-space: pre-wrap;

  & + & {
    margin-top: 5px;
  }
}
</style>

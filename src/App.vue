<script setup lang="ts">
import { reactive, computed } from 'vue';
import { groupBy } from 'lodash-es';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useGitHubStore } from './store/github';
import { omitNullableHandler } from './utils/';

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

const variables = computed(() => {
  const closedPeriodQuery = (() => {
    const { fromDataStr, toDateStr } = githubStore.request;
    if (!fromDataStr && !toDateStr) {
      return null;
    }
    if (!toDateStr) {
      return `closed:>=${fromDataStr}`;
    }
    if (!fromDataStr) {
      return `closed:<=${toDateStr}`;
    }
    return `closed:${fromDataStr}..${toDateStr}`;
  })();
  return {
    searchQuery: [
      `repo:${githubStore.repository.owner}/${githubStore.repository.name}`,
      'is:issue',
      'is:closed',
      closedPeriodQuery,
    ]
      .filter(omitNullableHandler)
      .join(' '),
    last: githubStore.request.last,
  };
});

const { result } = useQuery(
  gql`
    query searchIssues($searchQuery: String!, $last: Int) {
      search(query: $searchQuery, type: ISSUE, last: $last) {
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
                    login
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

const issueGroupByAssignee = computed(() => {
  if (result.value == null) {
    return null;
  }
  const groups = groupBy(result.value.search.edges, (edge: any) => {
    const assignee = edge.node.assignees.edges[0];
    return assignee ? assignee.node.login : '';
  });
  console.log(groups);
  return groups;
});

const onChangeLast = (event: Event) => {
  if (!(event.currentTarget instanceof HTMLInputElement)) {
    return;
  }
  githubStore.setLast(event.currentTarget.valueAsNumber);
};

const onChangeFromDate = (event: Event) => {
  if (!(event.currentTarget instanceof HTMLInputElement)) {
    return;
  }
  githubStore.setFromDateStr(event.currentTarget.value);
};

const onChangeToDate = (event: Event) => {
  if (!(event.currentTarget instanceof HTMLInputElement)) {
    return;
  }
  githubStore.setToDateStr(event.currentTarget.value);
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
  .search-area
    div 検索
    div
      span 件数:
      input(
        :value='githubStore.request.last',
        type='number',
        @change='onChangeLast'
      )
    div
      span 期間:
      input(
        :value='githubStore.request.fromDataStr',
        type='date',
        @change='onChangeFromDate'
      )
      span 〜
      input(
        :value='githubStore.request.toDateStr',
        type='date',
        @change='onChangeToDate'
      )
  div(v-if='issueGroupByAssignee')
    template(v-for='(issues, key) in issueGroupByAssignee')
      h3 {{ key || 'NoBody' }}
      div
        template(v-for='issue in issues')
          .issue-block
            a(:href='issue.node.url', target='_blank') {{ issue.node.title }}
            div
              span labels: {{ issue.node.labels.edges.map((labelEdge: any) => labelEdge.node.name).join(', ') }}
            div closedAt: {{ issue.node.closedAt }}
            div {{ issue.node.body }}
</template>

<style lang="scss" scoped>
.search-area {
  margin-top: 10px;
  border: solid 1px #ccc;
  padding: 10px;
}

.issue-block {
  padding: 5px;
  border: solid 1px #ccc;
  white-space: pre-wrap;

  & + & {
    margin-top: 5px;
  }
}
</style>
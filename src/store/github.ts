import { defineStore } from 'pinia';

type State = {
  request: {
    last: number;
    dateStr: string;
    fromDataStr: string;
    toDateStr: string;
  };
  repository: {
    owner: string;
    name: string;
  };
};

function initialState(): State {
  const stateStr = localStorage.getItem('piniaState');
  try {
    const rootState = JSON.parse(stateStr || '');
    return rootState.github;
  } catch {
    return {
      request: {
        last: 5,
        dateStr: '',
        fromDataStr: '',
        toDateStr: '',
      },
      repository: {
        owner: '',
        name: '',
      },
    };
  }
}

export const useGitHubStore = defineStore('github', {
  state: initialState,
  actions: {
    setRepoOwner(repoOwner: string) {
      this.repository.owner = repoOwner;
    },
    setRepoName(repoName: string) {
      this.repository.name = repoName;
    },
    setLast(last: number) {
      this.request.last = last;
    },
    setDate(dateStr: string) {
      this.request.dateStr = dateStr;
    },
    setFromDateStr(fromDateStr: string) {
      this.request.fromDataStr = fromDateStr;
    },
    setToDateStr(toDateStr: string) {
      this.request.toDateStr = toDateStr;
    },
  },
});

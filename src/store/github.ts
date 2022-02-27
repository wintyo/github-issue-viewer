import { defineStore } from 'pinia';

type State = {
  request: any;
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
      },
    };
  }
}

export const useGitHubStore = defineStore('github', {
  state: initialState,
  actions: {
    setLast(last: number) {
      this.request.last = last;
    },
  },
});

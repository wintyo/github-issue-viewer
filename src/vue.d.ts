import { filters } from './utils/filters';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: typeof filters;
  }
}

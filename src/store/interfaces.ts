export enum ActionType {
  SEARCH_REPOS = 'search_repos',
  SEARCH_REPOS_OK = 'search_repos_ok',
  SEARCH_REPOS_ERROR = 'search_repos_error'
}

export interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[]
}

interface SearchReposAction {
  type: ActionType.SEARCH_REPOS
}

interface SearchReposOkAction {
  type: ActionType.SEARCH_REPOS_OK
  payload: string[];
}

interface SearchReposErrorAction {
  type: ActionType.SEARCH_REPOS_ERROR
  payload: string;
}
export type Action = SearchReposAction | SearchReposOkAction | SearchReposErrorAction

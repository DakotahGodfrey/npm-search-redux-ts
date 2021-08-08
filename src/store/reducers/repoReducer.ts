import { RepoState, Action, ActionType } from '..';

const initialState = {
  loading: false,
  error: null,
  data: []
}

const repoReducer = (state: RepoState = initialState, action:Action ): RepoState => {

  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: []  };
    case ActionType.SEARCH_REPOS_OK:
      return {loading: false, error: null, data: action.payload}
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state
  }
}

export default repoReducer;
import axios from 'axios'
import { Dispatch } from 'redux';
import { ActionType, Action } from '..'
import { rootURL } from '../../components/App';

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOS
    });
    try {
      const { data } = await axios.get(rootURL, { params: { text: term } });
      const names = data.objects.map((result:any) => {
        return result.package.name
      })
      dispatch({
        type: ActionType.SEARCH_REPOS_OK,
        payload: names
      })
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOS_ERROR,
        payload: err.message
      })
    }
  }
}
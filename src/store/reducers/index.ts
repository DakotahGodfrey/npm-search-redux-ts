import repoReducer from './repoReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  repos: repoReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>;
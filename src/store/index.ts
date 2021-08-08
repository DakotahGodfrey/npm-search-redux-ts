import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { RepoState, Action, ActionType} from './interfaces';
import reducers from './reducers';
import { RootState } from './reducers';

export  {ActionType } 
export type { RepoState, Action, RootState }
export * as actionCreators from "./actionCreators"
const store = createStore(reducers, {}, applyMiddleware(thunk))
export default store;
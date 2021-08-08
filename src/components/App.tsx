import React from 'react'
import { Provider } from 'react-redux'
import store from '../store';
import ReposList from "./ReposList"

export const rootURL = "https://registry.npmjs.org/-/v1/search"

const App:React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <ReposList />
      </div>
    </Provider>
  )
}

export default App

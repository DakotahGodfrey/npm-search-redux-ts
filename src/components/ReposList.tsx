import { useState } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const ReposList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepos } = useActions();
  const { data, loading, error } = useTypedSelector((state) => state.repos);
  console.log(data)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={ e => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default ReposList

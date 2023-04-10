import './SearchBar.css'
import { useState } from 'react'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <label>Search Images Here</label>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button onClick={handleSubmit}>search</button>
      </form>
    </div>
  )
}

export default SearchBar

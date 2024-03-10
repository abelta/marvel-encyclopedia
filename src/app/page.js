'use client'
import { useEffect, useState } from 'react'
import { getCharacters } from 'api'
import { CharactersList, ResultsCount, SearchBox } from 'components'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const doGetCharacters = async () => {
      const {
        data: { results: characters },
      } = await getCharacters({ nameStartsWith: searchQuery })
      setCharacters(characters)
    }
    doGetCharacters()
  }, [searchQuery])

  return (
    <div className="flex flex-col items-center min-h-screen p-24 space-y-4">
      <SearchBox onKeyUp={query => setSearchQuery(query)} />
      <ResultsCount characters={characters} />
      <CharactersList characters={characters} />
    </div>
  )
}

export default Home

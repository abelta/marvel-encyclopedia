import { getCharacters } from 'api'
import { CharactersList, ResultsCount, SearchBox } from 'components'

const metadata = {
  title: 'Marvel Encyclopedia',
}

const Home = async () => {
  const {
    data: { results: characters },
  } = await getCharacters()

  return (
    <div className="flex flex-col items-center min-h-screen p-24 space-y-4">
      <SearchBox />
      <ResultsCount count={characters.length} />
      <CharactersList
        characters={characters}
        linkTo={({ id }) => `/character/${id}`}
      />
    </div>
  )
}

export { metadata }
export default Home

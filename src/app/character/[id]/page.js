import { getCharacter, getComics } from 'api'
import { CharacterHero, ComicsList } from 'components'

const Page = async ({ params: { id } }) => {
  const {
    data: { results: characters },
  } = await getCharacter({ id })
  const character = characters[0]

  const {
    data: { results: comics },
  } = await getComics({ characterId: id })

  return (
    <div className="flex flex-col w-full">
      <CharacterHero {...character} />
      <div className="self-center max-w-6xl">
        <h2 className="mt-6 text-xl font-bold uppercase">Comics</h2>
        <ComicsList
          className="items-center flex-1 w-full gap-4 lg:flex-row"
          comics={comics}
        />
      </div>
    </div>
  )
}

export default Page

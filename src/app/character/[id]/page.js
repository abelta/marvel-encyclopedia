import { getCharacter } from 'api'
import { CharacterHero } from 'components'

const Page = async ({ params: { id } }) => {
  const {
    data: { results: characters },
  } = await getCharacter({ id })
  const character = characters[0]

  return (
    <div>
      <CharacterHero {...character} />
      <div>{JSON.stringify(character)}</div>
    </div>
  )
}

export default Page

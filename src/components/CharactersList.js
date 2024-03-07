import Link from 'next/link'
import { CharacterCard } from 'components'

const CharactersList = ({ characters, linkTo }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {characters.map(character => (
        <Link href={linkTo(character)} key={character.id}>
          <CharacterCard key={character.id} {...character} />
        </Link>
      ))}
    </div>
  )
}

export default CharactersList

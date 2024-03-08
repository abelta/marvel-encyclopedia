'use client'
import Link from 'next/link'
import { CharacterCard } from 'components'
import { useFavs, useUI } from 'hooks'

const CharactersList = ({ characters }) => {
  const { favsFilter } = useUI()
  const { favs } = useFavs()

  const filteredCharacters = favsFilter
    ? characters.filter(({ id }) => favs.includes(id.toString()))
    : characters

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredCharacters.map(character => (
        <Link href={`/character/${character.id}`} key={character.id}>
          <CharacterCard key={character.id} {...character} />
        </Link>
      ))}
    </div>
  )
}

export default CharactersList

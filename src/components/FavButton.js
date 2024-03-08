'use client'

import { HeartEmpty, HeartFull } from 'icons'
import { useFavs } from 'hooks'

const FavButton = ({ characterId, style, className }) => {
  const [favs, setFavs] = useFavs()
  console.log('FAVS', favs)
  return (
    <button
      className={className}
      style={style}
      onClick={event => {
        event.preventDefault()
        setFavs(
          favs.includes(characterId.toString())
            ? favs.filter(f => f.toString() !== characterId.toString())
            : [...favs, characterId.toString()],
        )
      }}
    >
      {favs.includes(characterId.toString()) ? (
        <HeartFull className="w-full h-full" />
      ) : (
        <HeartEmpty className="w-full h-full" />
      )}
    </button>
  )
}

export default FavButton

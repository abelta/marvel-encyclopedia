'use client'

import { HeartEmpty, HeartFull } from 'icons'
import { useFavs } from 'hooks'

const FavButton = ({ characterId, style, className }) => {
  const { favs, add, remove } = useFavs()

  return (
    <button
      className={className}
      style={style}
      onClick={event => {
        event.preventDefault()
        if (favs.includes(characterId.toString())) {
          remove(characterId.toString())
        } else {
          add(characterId.toString())
        }
      }}
      data-testid="fav-button"
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

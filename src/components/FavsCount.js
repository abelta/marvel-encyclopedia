'use client'

import { HeartFull, HeartEmpty } from 'icons'
import { useFavs, useUI } from 'hooks'

const FavsCount = () => {
  const { favs } = useFavs()
  const { favsFilter, toggleFavsFilter } = useUI()

  return (
    <button
      className="flex items-center"
      onClick={toggleFavsFilter}
      data-testid="favs-filter"
    >
      {favsFilter ? <HeartFull /> : <HeartEmpty />}
      <span className="ml-2 text-white" data-testid="favorites-counter">
        {favs.length}
      </span>
    </button>
  )
}

export default FavsCount

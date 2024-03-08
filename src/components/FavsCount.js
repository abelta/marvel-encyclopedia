'use client'

import { HeartFull, HeartEmpty } from 'icons'
import { useFavs, useUI } from 'hooks'

const FavsCount = () => {
  const { favs } = useFavs()
  const { favsFilter, toggleFavsFilter } = useUI()

  return (
    <button className="flex items-center" onClick={toggleFavsFilter}>
      {favsFilter ? <HeartFull /> : <HeartEmpty />}
      <span className="ml-2 text-white">{favs.length}</span>
    </button>
  )
}

export default FavsCount

'use client'

import { HeartFull } from 'icons'
import { useFavs } from 'hooks'

const FavsCount = () => {
  const { favs } = useFavs()

  return (
    <div className="flex items-center">
      <HeartFull />
      <span className="ml-2 text-white">{favs.length}</span>
    </div>
  )
}

export default FavsCount

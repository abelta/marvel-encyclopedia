'use client'

import { HeartFull } from 'icons'

const FavsCount = () => {
  return (
    <div className="flex items-center">
      <HeartFull />
      <span className="ml-2 text-white">12</span>
    </div>
  )
}

export default FavsCount

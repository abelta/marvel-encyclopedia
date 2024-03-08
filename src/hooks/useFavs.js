import { useEffect, useState } from 'react'

const useFavs = () => {
  const [favs, setFavs] = useState(() => {
    if (typeof window === 'undefined') return []
    return JSON.parse(localStorage.getItem('favs') || '[]')
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  return [favs, setFavs]
}

export default useFavs

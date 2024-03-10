import { marvelHash } from 'helpers'

const getComics = ({ characterId }) => {
  const ts = new Date().getTime()
  const limit = 50

  const url = new URL(
    `${process.env.NEXT_PUBLIC_MARVEL_URL}/characters/${characterId}/comics`,
  )
  const params = new URLSearchParams({
    ts,
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    hash: marvelHash(ts),
    limit,
  })

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default getComics

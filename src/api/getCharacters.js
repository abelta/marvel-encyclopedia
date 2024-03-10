import { marvelHash } from 'helpers'

const getCharacters = ({ nameStartsWith } = {}) => {
  const ts = new Date().getTime()
  const limit = 50

  const url = new URL(`${process.env.NEXT_PUBLIC_MARVEL_URL}/characters`)
  const params = new URLSearchParams({
    ts,
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    hash: marvelHash(ts),
    limit,
    ...(nameStartsWith && { nameStartsWith }),
  })

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default getCharacters

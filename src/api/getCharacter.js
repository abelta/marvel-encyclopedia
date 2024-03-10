import { marvelHash } from 'helpers'

const getCharacter = ({ id }) => {
  const ts = new Date().getTime()

  console.log('URL', `${process.env.NEXT_PUBLIC_MARVEL_URL}/characters/${id}`)
  const url = new URL(`${process.env.NEXT_PUBLIC_MARVEL_URL}/characters/${id}`)
  const params = new URLSearchParams({
    ts,
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    hash: marvelHash(ts),
  })

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default getCharacter

import getConfig from 'next/config'
import { marvelHash } from 'helpers'

const { publicRuntimeConfig } = getConfig()

const getCharacters = ({ nameStartsWith } = {}) => {
  const ts = new Date().getTime()
  const limit = 50

  const url = new URL(`${publicRuntimeConfig.marvelApi.baseUrl}/characters`)
  const params = new URLSearchParams({
    ts,
    apikey: publicRuntimeConfig.marvelApi.publicKey,
    hash: marvelHash(ts),
    limit,
    ...(nameStartsWith && { nameStartsWith }),
  })

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default getCharacters

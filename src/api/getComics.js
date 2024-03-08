import getConfig from 'next/config'
import { marvelHash } from 'helpers'

const { publicRuntimeConfig } = getConfig()

const getComics = ({ characterId }) => {
  const ts = new Date().getTime()
  const limit = 50

  const url = new URL(
    `${publicRuntimeConfig.marvelApi.baseUrl}/characters/${characterId}/comics`,
  )
  const params = new URLSearchParams({
    ts,
    apikey: publicRuntimeConfig.marvelApi.publicKey,
    hash: marvelHash(ts),
    limit,
  })

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default getComics

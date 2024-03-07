import getConfig from 'next/config'
import { marvelHash } from 'helpers'

const { publicRuntimeConfig } = getConfig()

const getCharacter = ({ id }) => {
  const ts = new Date().getTime()

  const url = new URL(
    `${publicRuntimeConfig.marvelApi.baseUrl}/characters/${id}`,
  )
  const params = new URLSearchParams({
    ts,
    apikey: publicRuntimeConfig.marvelApi.publicKey,
    hash: marvelHash(ts),
  })

  url.search = params.toString()

  return fetch(url.toString()).then(res => res.json())
}

export default getCharacter

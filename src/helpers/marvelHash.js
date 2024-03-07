import getConfig from 'next/config'
import md5 from 'md5'

const { publicRuntimeConfig } = getConfig()

const marvelHash = ts => {
  const publicKey = publicRuntimeConfig.marvelApi.publicKey
  const privateKey = publicRuntimeConfig.marvelApi.privateKey
  return md5(`${ts}${privateKey}${publicKey}`)
}

export default marvelHash

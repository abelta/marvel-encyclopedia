import md5 from 'md5'

const marvelHash = ts => {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY
  return md5(`${ts}${privateKey}${publicKey}`)
}

export default marvelHash

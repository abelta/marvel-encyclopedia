/** @type {import('next').NextConfig} */

const nextConfig = {
  publicRuntimeConfig: {
    marvelApi: {
      baseUrl: 'https://gateway.marvel.com/v1/public',
      publicKey: 'f7a60097b9e975950825ee6ec5515a99',
      privateKey: 'b1daab242edf883d9cf3d788359520f02e89efbd',
    },
  },
}

export default nextConfig

/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
const FavButton = dynamic(() => import('components/FavButton'), { ssr: false })

const CharacterHero = ({ description, id, name, thumbnail }) => (
  <div className="flex flex-row justify-center w-full bg-black">
    <div className="container flex flex-col items-center max-w-6xl gap-4 lg:flex-row">
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        height="850"
        width="850"
        className="object-cover w-full h-auto md:w-80 md:h-full"
      />
      <div className="flex flex-col w-full gap-8 px-4 py-6">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-4xl font-bold text-white uppercase">{name}</h2>
          <FavButton characterId={id} />
        </div>
        <p className="text-white lg:mt-0">{description}</p>
      </div>
    </div>
  </div>
)

export default CharacterHero

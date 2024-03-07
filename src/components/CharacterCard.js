import { HeartEmpty } from 'icons'

const CharacterCard = ({ name, thumbnail }) => {
  return (
    <article
      className="flex flex-col justify-between cut-corner"
      style={{
        height: '246px',
        width: '173px',
        backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`,
        backgroundSize: 'cover',
      }}
    >
      <div class="relative h-14 border-t-4 border-red-500  bg-black w-full flex flex-row items-center px-4 justify-around mt-auto">
        <span className="absolute overflow-hidden text-white w-28 whitespace-nowrap overflow-ellipsis left-4">
          {name}
        </span>
        <HeartEmpty
          className="absolute right-2"
          style={{
            height: '25%',
            width: '25%',
          }}
        />
      </div>
    </article>
  )
}

export default CharacterCard

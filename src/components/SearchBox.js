import { Magnifier } from 'icons'

const SearchBox = () => {
  return (
    <div className="flex flex-row items-center w-full pb-3 space-x-4 border-b border-black">
      <Magnifier />
      <input
        type="search"
        placeholder="SEARCH A CHARACTER"
        className="w-full h-3 uppercase text-l focus:outline-none"
      />
    </div>
  )
}

export default SearchBox

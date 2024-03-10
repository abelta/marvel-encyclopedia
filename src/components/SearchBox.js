'use client'
import { Magnifier } from 'icons'

const SearchBox = ({ onKeyUp }) => {
  return (
    <div className="flex flex-row items-center w-full pb-3 space-x-4 border-b border-black">
      <Magnifier />
      <input
        placeholder="SEARCH A CHARACTER"
        className="w-full h-3 uppercase text-l focus:outline-none"
        onKeyUp={event => onKeyUp(event.currentTarget.value)}
      />
    </div>
  )
}

export default SearchBox

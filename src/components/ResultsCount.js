'use client'

import { useFavs, useUI } from 'hooks'

const ResultsCount = ({ characters }) => {
  const { favs } = useFavs()
  const { favsFilter } = useUI()

  const filteredResults = favsFilter
    ? characters.filter(({ id }) => favs.includes(id.toString()))
    : characters

  return (
    <span className="self-start text-sm uppercase">
      {filteredResults.length} results
    </span>
  )
}

export default ResultsCount

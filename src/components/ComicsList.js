import classNames from 'classnames'
import { ComicCard } from 'components'

const ComicsList = ({ className, comics }) => (
  <div
    className={classNames(
      'flex flex-col gap-4 my-4 md:overflow-x-auto md:overflow-y-hidden scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-400 md:flex-row',
      className,
    )}
  >
    {comics.map(comic => (
      <ComicCard key={comic.id} className="md:w-64 md:flex-none" {...comic} />
    ))}
  </div>
)

export default ComicsList

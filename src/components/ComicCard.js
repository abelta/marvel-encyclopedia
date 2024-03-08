/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'

const ComicCard = ({ className, thumbnail, title, dates }) => {
  const onSaleDate = dates?.find(({ type }) => type === 'onsaleDate')?.date
  const year = onSaleDate ? new Date(onSaleDate).getFullYear() : null

  return (
    <article
      className={classNames('w-full h-auto md:relative md:w-48', className)}
    >
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        className="w-full h-auto"
        alt="comic"
        height="850"
        width="553"
      />
      <div className="flex flex-col p-2">
        <p className="overflow-hidden font-bold md:w-44 whitespace-nowrap overflow-ellipsis">
          {title}
        </p>
        <p className="text-sm">{year}</p>
      </div>
    </article>
  )
}

export default ComicCard

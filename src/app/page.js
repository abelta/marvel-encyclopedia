import { ResultsCount, SearchBox } from 'components'

const metadata = {
  title: 'Marvel Encyclopedia',
}

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-24 space-y-4">
      <SearchBox />
      <ResultsCount count={42} />
    </div>
  )
}

export { metadata }
export default Home

import Movie from "./Movie"

export default async function Home() {

  // https://api.themoviedb.org/3/movie/550?api_key=6fee2c8386d421e938638292f7b81a3b

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6fee2c8386d421e938638292f7b81a3b`)
  const res = await data.json()
  console.log(res)

  return (
    <main>
      <h1 className='text-lg p-3 font-bold'>Nikola</h1>
      <div className="grid gap-16 grid-cols-fluid">

        {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}

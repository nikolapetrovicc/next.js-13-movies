import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6fee2c8386d421e938638292f7b81a3b`)
    const res = await data.json()
    return res.results.map((movie: any) => ({
        movie: movie.id,
    }))
}


export default async function MovieDetail({ params }: any) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=6fee2c8386d421e938638292f7b81a3b`)
    const res = await data.json()
    console.log(res);

    return (
        <div className="m-5">

            <h1 className="text-5xl hover:mt-3">{res.title}</h1>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2>Runtime: {res.runtime} minutes</h2>
            <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-2xl">{res.status}</h2>
            <Image
                src={`${imagePath}${res.backdrop_path}`}
                alt=""
                className="my-12 w-full"
                width={1000}
                height={1000}
                priority
            />
            <p>{res.overview}</p>
        </div>
    )

}
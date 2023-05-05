import Image from "next/image";

export async function getStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();
  return res.results.map((movie) => ({ movie: toString(movie.id) }));
}

export default async function MovieDetails({ params }) {
  const { movie } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const res = await data.json();
  console.log(data);

  return (
    <div className="w-full">
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime : {res.runtime} minutes</h2>
      <h2 className="bg-green-600 inline-block my-2 py-2 px-2 rounded-md text-sm">
        {res.status}
      </h2>
      <Image
        src={imagePath + res.backdrop_path}
        className="my-12"
        width={1000}
        height={1000}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}

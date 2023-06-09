import Movie from "./Movie";

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default async function Home() {
  //throw new Error("this is custom error");

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();
  // console.log("data", res  )

  return (
    <main>
      <h1 className="my-5 text-teal-500">Here are the recent list of movies</h1>
      <div className="grid gap-1 grid-cols-fluid">
        {res.results.map((movie) => (
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
  );
}

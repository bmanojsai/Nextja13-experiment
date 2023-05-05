import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="m-5">
      <h3>{title}</h3>
      <p className="my-2">Release Date : {release_date}</p>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          height={300}
          width={200}
        />
      </Link>
    </div>
  );
}

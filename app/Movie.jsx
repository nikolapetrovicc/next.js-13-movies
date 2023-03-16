import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const image_path = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h3>{title}</h3>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={image_path + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}

import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Home" };

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000))   //loadingPage 출력 1초 텀
  const res = await fetch(API_URL + 'movies')
  const json = await res.json()

  return json;
}
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const movies: Movie[] = await getMovies();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {
          movies?.map((movie, index) => {
            return (
              <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            )
          })
        }
      </ul>

    </main>
  );
}

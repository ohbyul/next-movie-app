import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";

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


const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL
async function getMovies() {
  const res = await fetch(NEXT_PUBLIC_API_URL + 'movies')
  const json = await res.json()

  return json;
}
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const movies: Movie[] = await getMovies();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        movies?.map((movie, index) => {
          return (
            <div>
              {movie.id}
            </div>
          )
        })
      }
    </main>
  );
}

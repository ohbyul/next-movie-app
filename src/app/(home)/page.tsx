import Movie from "@/components/movie";
import { Metadata } from "next";
import styles from '../../styles/home.module.css'


export const metadata: Metadata = { title: "Home" };

export interface Movie {
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
  homepage: string;
}


// export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/'

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000))   //loadingPage 출력 1초 텀
  const res = await fetch(API_URL + 'movies')
  const json = await res.json()

  return json;
}
export default async function Home() {
  const movies: Movie[] = await getMovies();

  return (
    <div className={styles.container}>
      {
        movies?.map((movie, index) => {
          return (
            <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
          )
        })
      }
    </div>
  );
}

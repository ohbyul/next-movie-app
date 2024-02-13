import Movie from "@/components/movie";
import { Metadata } from "next";
import styles from '../../styles/home.module.css'
import { API_URL } from "@/utiles/constants";
import { MovieProps } from "@/utiles/movie.interface";


export const metadata: Metadata = { title: "Home" };



async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000))   //loadingPage 출력 1초 텀
  const res = await fetch(API_URL + 'movies')
  const json = await res.json()

  return json;
}
export default async function Home() {
  const movies: MovieProps[] = await getMovies();

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

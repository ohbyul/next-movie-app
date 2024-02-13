import { MovieProps } from '@/utiles/movie.interface';
import styles from '../styles/movie-info.module.css'
import { API_URL } from "@/utiles/constants";


export async function getMovie(id: string) {
    const res = await fetch(`${API_URL}movies/${id}`)
    const json = await res.json()

    return json;
}


export default async function MovieInfo({ id }: { id: string }) {
    const movie: MovieProps = await getMovie(id)

    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                {movie.homepage && <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>}
            </div>

        </div>
    )
}

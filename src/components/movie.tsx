"use client"


import Link from "next/link"
import styles from '../styles/movie.module.css'
import { useRouter } from "next/navigation";

interface IMovieProps {
    title: string;
    id: number;
    poster_path: string;
}
export default function Movie({ title, id, poster_path }: IMovieProps) {
    const router = useRouter()      //client components 사용시..
    const handleClick = () => {
        router.push(`/movies/${id}`)
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={handleClick} />
            <Link href={`/movies/${id}`}>
                <h3>{title}</h3>
            </Link>
        </div>
    )
}

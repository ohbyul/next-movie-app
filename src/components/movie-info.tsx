import { API_URL } from "@/app/(home)/page";

async function getMovie(id: string) {
    const res = await fetch(`${API_URL}movies/${id}`)
    const json = await res.json()

    return json;
}


export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id)
    return (
        <div>
            <h1>Movie {movie.title}</h1>
        </div>
    )
}

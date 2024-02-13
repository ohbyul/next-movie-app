import { API_URL } from "@/app/(home)/page";
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Metadata } from "next"
import { Suspense } from "react";

export const metadata: Metadata = { title: 'Movie' }

// async function getMovie(id: string) {
//     const res = await fetch(`${API_URL}movies/${id}`)
//     const json = await res.json()

//     return json;
// }

// async function getVideos(id: string) {
//     const res = await fetch(`${API_URL}movies/${id}/videos`)
//     const json = await res.json()

//     return json;
// }

export default async function MovieDatail({
    params: { id }
}: {
    params: { id: string }
}) {

    // 직렬 호출
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);

    // 병렬로 호출
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <div>
            <Suspense fallback={<h1>loading movie..</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>loading video..</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}

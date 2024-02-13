import { API_URL } from '@/utiles/constants';
import styles from '../styles/movie-videos.module.css'

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error('something wrong ....')
    const res = await fetch(`${API_URL}movies/${id}/videos`)
    const json = await res.json()

    return json;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((video: any) => {
                return (
                    <iframe
                        key={video.id}
                        src={`https://youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )
            })}
        </div>
    )
}
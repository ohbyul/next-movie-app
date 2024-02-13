import { API_URL } from "@/app/(home)/page";

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
        <h6>{JSON.stringify(videos)}</h6>
    )
}
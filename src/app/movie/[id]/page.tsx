export default function MovieDatail({
    params: { id }
}: {
    params: { id: string }
}) {
    return (
        <div>
            <h1>Movie {id}</h1>
        </div>
    )
}

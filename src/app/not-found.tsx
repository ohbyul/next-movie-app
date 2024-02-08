import { Metadata } from "next";

export const metadata: Metadata = {
    title: "not found"
};
export default function notFound() {
    return (
        <div>
            <h1>Not Found</h1>
        </div>
    )
}

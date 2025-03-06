import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AmadeusDev",
    robots: "noindex, nofollow",
};

export default async function ProjectDetails({ params }: { params: Promise<{ projectId: string }> }) {

    const productId = (await params).projectId;



    return <div>
        <h1>Project Details</h1>
        <p>Project ID: {productId}</p>
    </div>

}
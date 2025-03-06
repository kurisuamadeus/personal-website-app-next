import { ProjectData } from "@/types";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AmadeusDev",
    robots: "noindex, nofollow",
};

export default async function ProjectDetails({ params }: { params: Promise<{ langId: string, projectId: string }> }) {

    const projectId = (await params).projectId;
    const langId = (await params).langId;
    const projectDetailsDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getproject/details?lang=${langId}&projectId=${projectId}`);
    const projectDetailsDataJSON: ProjectData = projectDetailsDataRes.data.data;

    return <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-[3vw]">{projectDetailsDataJSON.data[langId].title}</h1>
        <iframe className="w-[30vw] h-[20vw] mt-[5vw] pointer-events-none" src={projectDetailsDataJSON.thumbnailImageUrl} />
        <p className="mt-[3vw] text-[2vw]">{projectDetailsDataJSON.data[langId].desc}</p>
        <a className="block no-underline mt-[10vw] mb-[10vw] ml-auto mr-auto p-[1.5vw] w-[15vw] h-[5vw] rounded-[20%] text-[#ffffffff] hover:text-black bg-[#0000000] hover:bg-white text-[1.5vw] shadow-[1px_1px] hover:shadow-none shadow-white text-center" href={projectDetailsDataJSON.url} target='_blank'>{langId == "jp" ? "リンクはこちら" : "Visit"}</a>
    </div>

}
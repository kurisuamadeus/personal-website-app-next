import ProjectComponent from "@/components/project-component/project-component"
import { ProjectData, ProjectsPageData } from "@/types"
import axios from "axios"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AmadeusDev | Projects",
    description: "Showcase of the projects i ever made.",
    robots: "index, nofollow",
};

export default async function Projects({ params }: { params: Promise<{ langId: string }> }) {
    const langId = (await params).langId;
    const projectsPageDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getpagedata?lang=${langId}&dataname=projects`);
    const pageData: ProjectsPageData = projectsPageDataRes.data.data.content;
    const gameProjectDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getproject/search?lang=${langId}&category=game`);
    const gameProjectData: ProjectData[] = gameProjectDataRes.data.data;
    const webdevProjectDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getproject/search?lang=${langId}&category=webdev`);
    const webdevProjectData: ProjectData[] = webdevProjectDataRes.data.data;

    return <div className="pt-[7rem]">
        <h2 className="text-center">{pageData?.gameDevTitle}</h2>
        <div className="grid grid-cols-3">
            {
                gameProjectData ? gameProjectData.map((data) => {
                    return <ProjectComponent key={`game-project-${data.projectId}`} imgUrl={data.thumbnailImageUrl} projectId={data.projectId} projectName={data.data[String(langId)].title} />
                }) : null
            }
        </div>
        <h2 className="text-center">{pageData?.webDevTitle}</h2>
        <div className="grid grid-cols-3">
            {
                webdevProjectData ? webdevProjectData.map((data) => {
                    return <ProjectComponent key={`game-project-${data.projectId}`} imgUrl={data.thumbnailImageUrl} projectId={data.projectId} projectName={data.data[String(langId)].title} />
                }) : null
            }

        </div>
    </div >

}
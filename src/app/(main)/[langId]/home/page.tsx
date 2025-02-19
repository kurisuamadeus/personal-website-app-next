import ShowcaseComponent from "@/components/home-component/showcase-component";
import axios from "axios";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "AmadeusDev | Home",
};

export default async function Home({ params }: { params: Promise<{ langId: string }> }) {
    const langId = (await params).langId;
    const homePageDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getpagedata?lang=${langId}&dataname=home`);
    const homePageDataJSON = homePageDataRes.data
    console.log(homePageDataJSON);
    const showcaseDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getshowcase?lang=${langId}`);
    const showcaseDataJSON = showcaseDataRes.data


    return <div className="flex items-center justify-center h-screen">
        <ShowcaseComponent showcaseData={showcaseDataJSON.data} langId={langId} />
    </div>

}
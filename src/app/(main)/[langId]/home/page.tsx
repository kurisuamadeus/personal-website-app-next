import ShowcaseComponent from "@/components/home-component/showcase-component";
import Link from "next/link";
import { Carousel, CarouselItem } from "react-bootstrap";

interface HomePageData {
    metaData: {
        title: string
        desc: string
        robot: string
        canonical: string
        enableOG: boolean
        keywords: string
        alternateUrl: {
            url: string,
            lang: string
        }[]
    }
}


export default async function Home({ params }: { params: Promise<{ langId: string }> }) {
    const langId = (await params).langId;
    const homePageDataRes = await fetch(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getpagedata?lang=${langId}&dataname=home`);
    const homePageDataJSON = await homePageDataRes.json();
    const showcaseDataRes = await fetch(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getshowcase?lang=${langId}`);
    const showcaseDataJSON = await showcaseDataRes.json();


    return <div>
        Home
        <ShowcaseComponent showcaseData={showcaseDataJSON.data} langId={langId} />
    </div>

}
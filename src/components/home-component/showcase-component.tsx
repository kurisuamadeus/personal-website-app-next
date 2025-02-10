"use client";
import Link from "next/link"
import { Carousel, CarouselItem } from "react-bootstrap"

type ShowcaseData = {
    showcaseId: string,
    showcaseImageUrl: string,
    showcaseTitle: any,
    showcaseUrl: string
}
interface ShowcaseComponentProps {
    showcaseData: ShowcaseData[],
    langId: string
}

export default function ShowcaseComponent({ showcaseData, langId }: ShowcaseComponentProps) {
    return <div>
        <Carousel>
            {showcaseData.map((data: ShowcaseData) => {
                return <CarouselItem key={data.showcaseId} onClick={() => console.log("test")}>
                    <Link href={data.showcaseUrl} className='showcase-item'>
                        <div>
                            <div className='showcase-text'>
                                <p>{data.showcaseTitle[String(langId)]}</p>
                            </div>
                            <iframe src={data.showcaseImageUrl} onClick={() => { window.location.href = data.showcaseUrl }} ></iframe>
                        </div>
                    </Link>
                </CarouselItem>
            })}
        </Carousel>
    </div>
}
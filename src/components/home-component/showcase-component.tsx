"use client";
import { ShowcaseData } from "@/types";
import Link from "next/link"
import { Carousel, CarouselItem } from "react-bootstrap"


interface ShowcaseComponentProps {
    showcaseData: ShowcaseData[],
    langId: string
}

export default function ShowcaseComponent({ showcaseData, langId }: ShowcaseComponentProps) {
    return <div>
        <Carousel>
            {showcaseData.map((data: ShowcaseData) => {
                return <CarouselItem key={data.showcaseId} onClick={() => console.log("test")}>
                    <Link href={data.showcaseUrl} className="group flex items-center justify-center">
                        <div>
                            <div className="group-hover:opacity-100 opacity-[0] absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-[3vw] font-bold w-[80%] left-[10%]">
                                <p>{data.showcaseTitle[String(langId)]}</p>
                            </div>
                            <iframe className="pointer-events-none w-[90vw] h-[30vw]" src={data.showcaseImageUrl} onClick={() => { window.location.href = data.showcaseUrl }} ></iframe>
                        </div>
                    </Link>
                </CarouselItem>
            })}
        </Carousel>
    </div>
}
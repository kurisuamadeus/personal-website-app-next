import { ProfilePageData, ProfileStackData } from "@/types";
import axios from "axios"
import { Metadata } from "next";
import { format } from "react-string-format"

export const metadata: Metadata = {
    title: "AmadeusDev | Profile",
};

export default async function Profile({ params }: { params: Promise<{ langId: string }> }) {
    const langId = (await params).langId;
    const stackLink = 'https://www.google.com/search?q='
    const profilePageDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getpagedata?lang=${langId}&dataname=profile`);
    const pageData: ProfilePageData = profilePageDataRes.data.data.content;
    const stackLinkQuery = pageData.iconSearchWord;
    const stackDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/gettoolsdata?lang=${langId}`);
    const stackData: ProfileStackData[] = stackDataRes.data.data;

    const stackTitleClassName = "text-[3vw] mb-[5vw]";

    console.log(stackData);
    return <div>
        <h1 className="text-[4vw] mb-[3vw]">{pageData?.profileTitle}</h1>
        <p className="text-[2vw] mb-[5vw]">{pageData?.profileContent}</p>
        <h1 className={stackTitleClassName}>{pageData?.programmingLanguageTitle}</h1>
        <div className='flex w-[70%] flex-wrap'>
            <>
                {
                    stackData != null ? stackData[0].contents.map((content, x) => {
                        return <a key={'PL' + x} className={`${content.icon} flex relative justify-center align-center overflow-hidden z-0 border-[0] text-[5vw] mr-[5vw] mb-[3vw] no-underline`} href={stackLink + format(stackLinkQuery, content.stackName)}></a>
                    }) : null
                }
            </>
        </div>
        <h1 className={stackTitleClassName}>{pageData?.toolsServicesTitle}</h1>
        <div className='flex w-[70%] flex-wrap'>
            <>
                {
                    stackData != null ? stackData[1].contents.map((content, x) => {
                        return <a key={'T' + x} className={`${content.icon} flex relative justify-center align-center overflow-hidden z-0 border-[0] text-[5vw] mr-[5vw] mb-[3vw] no-underline`} href={stackLink + format(stackLinkQuery, String(content.stackName))}></a>
                    }) : null
                }
            </>
        </div>
    </div>

}
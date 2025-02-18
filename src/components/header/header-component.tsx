"use client";
import { useEffect, useRef, useState } from "react";
import HeaderButtons from "./header-buttons";
import HeaderLangSelector from "./header-lang-selector";
import axios from "axios";


const logoUrl = '/logowhite.svg';

interface HeaderData {
    homeTitle: string,
    profileTitle: string,
    projectsTitle: string,
    contactTitle: string
}

interface HeaderComponentProps {
    backendDomain: string | undefined,
    backendPort: string | undefined
}



export default function HeaderComponent({ backendDomain, backendPort }: HeaderComponentProps) {
    const initProcess = useRef(false)
    const [pageData, setHeaderData] = useState<HeaderData>();
    useEffect(() => {
        if (!initProcess.current) {

            let lang = window.location.href.split('/')[3];
            axios.get(`${backendDomain}:${backendPort}/getpagedata?lang=${lang}&dataname=header`)
                .then(res => {
                    if (pageData != res.data.data.content) {
                        setHeaderData(res.data.data.content);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        return () => {
            initProcess.current = true;
        }
    }, [])
    return <div className="fixed bg-[#424242] text-white top-0 z-1 w-full h-[15%] justify-between items-center">
        <a className='absolute top-0 left-[3vw] p-4 text-black' href='/'><img className='w-[5vw] min-w-[50px]' src={logoUrl} /></a>
        <HeaderButtons pageData={pageData} />
        <HeaderLangSelector />
    </div>

}
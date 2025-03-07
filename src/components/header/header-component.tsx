"use client";
import HeaderButtons from "./header-buttons";
import HeaderLangSelector from "./header-lang-selector";
import Link from "next/link";
import { HeaderData } from "@/types";


const logoUrl = '/logowhite.svg';



interface HeaderComponentProps {
    headerPageData: HeaderData | undefined
}



export default function HeaderComponent({ headerPageData }: HeaderComponentProps) {
    return <div className="fixed bg-[#424242] text-white top-0 z-1 w-full h-[15%] justify-between items-center">
        <Link className='absolute top-0 left-[3vw] p-4 text-black' href='/'><img className='w-[5vw] min-w-[50px]' src={logoUrl} /></Link>
        <HeaderButtons pageData={headerPageData} />
        <HeaderLangSelector />
    </div>

}
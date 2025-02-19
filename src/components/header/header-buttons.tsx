import { useLanguageStore } from "@/store/store";
import HeaderButton from "./header-button"
import { HeaderData } from "@/types";


interface HeaderButtonProps {
    pageData: HeaderData | undefined
}

export default function HeaderButtons({ pageData }: HeaderButtonProps) {
    const { lang } = useLanguageStore();
    return <div className='flex justify-center items-center w-[50vw] h-full ml-[30vw]'>
        <HeaderButton label={String(pageData?.homeTitle)} destUrl='/' />
        <HeaderButton label={String(pageData?.profileTitle)} destUrl={`/${lang}/profile`} />
        <HeaderButton label={String(pageData?.projectsTitle)} destUrl={`/${lang}/projects`} />
        <HeaderButton label={String(pageData?.contactTitle)} destUrl={`/${lang}/contact`} />
    </div>

}
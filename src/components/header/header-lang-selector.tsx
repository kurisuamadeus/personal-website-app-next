import { useLanguageStore } from "@/store/store";
import { useEffect } from "react";
import { languageAvailable } from "@/utils/helper";


export default function HeaderLangSelector() {
    const { lang, setLang } = useLanguageStore();


    // run on component mount
    useEffect(() => {
        let currentUrl = []
        currentUrl = window.location.href.split('/')
        // if lang is empty, set it
        if (lang == '') {
            // if language in url is valid, set lang to url language, else set to english
            if (languageAvailable.includes(currentUrl[3])) {
                setLang(currentUrl[3]);
            } else {
                setLang('en');
            }
        }
        // if language url is different from lang and language url is valid, set lang to url language
        if (currentUrl[3] != lang) {
            if (languageAvailable.includes(currentUrl[3])) {
                setLang(currentUrl[3]);
            } else {
                // set language url to lang value if url language is invalid and do redirect
                currentUrl[3] = lang
                window.location.href = currentUrl.join('/')
                // router.push(currentUrl.join('/'));
            }
        }
    }, [])
    return <div className='absolute top-0 right-[3vw] pt-[2vh] text-black'>
        <select className="w-[7vw] h-[7vw] max-w-[100px] max-h-[100px] font-[min(2vw, 25px)] appearance-none rounded-[20%] text-align-last-center" onChange={(e) => {
            setLang(e.target.value)
            let currentUrl = []
            currentUrl = window.location.href.split('/')
            currentUrl[3] = e.target.value
            window.location.href = currentUrl.join('/')
        }} value={lang}>
            <option className="w-[50%] h-[50%]" value={'en'}>EN</option>
            <option className="w-[50%] h-[50%]" value={'jp'}>JP</option>
        </select>
    </div>

}
"use client";

import { useLanguageStore } from "@/store/store";
import { languageAvailable } from "@/utils/helper";
import { useEffect, useState } from "react";

function HomeRedirectComponent() {
    const { lang, setLang } = useLanguageStore();
    const [isHydrated, setIsHydrated] = useState(false)
    useEffect(() => {
        if (useLanguageStore.persist.hasHydrated()) {
            setIsHydrated(true)
        }
        if (isHydrated) {

            let currentUrl = [];
            currentUrl = window.location.href.split('/')
            // if lang is empty, redirect to en
            if (lang == '') {
                setLang('en');
                currentUrl[3] = "en"
                window.location.href = currentUrl.join('/') + "/home"
            }
            // if language url is different from lang and language url is valid, set lang to url language
            if (currentUrl[3] != lang) {
                if (languageAvailable.includes(currentUrl[3])) {
                    setLang(currentUrl[3]);
                } else {
                    // set language url to lang value if url language is invalid and do redirect
                    currentUrl[3] = lang
                    window.location.href = currentUrl.join('/') + "/home"
                }
            }
        }
    }, [isHydrated])
    return (
        <div></div>
    )
}

export default HomeRedirectComponent
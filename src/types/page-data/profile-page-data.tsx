export type ProfilePageData = {
    profileTitle: string,
    profileContent: string,
    programmingLanguageTitle: string,
    toolsServicesTitle: string,
    iconSearchWord: string
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
export type ProjectsPageData = {
    gameDevTitle: string,
    webDevTitle: string,
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
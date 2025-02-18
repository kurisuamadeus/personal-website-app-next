export type ProjectData = {
    projectId: string,
    url: string,
    thumbnailImageUrl: string,
    title: string,
    data: ProjectContentData

}
export type ProjectContentData = {
    [key: string]: {
        title: string
    }
}

import { ContactFormSchemaMessages } from "@/schema/schema"

export type ContactPageData = {
    emailTitle: string,
    nameTitle: string,
    inquiryTitle: string,
    inquiryValues: {
        inquiryValue: string,
        inquiryName: string
    }[]
    messageTitle: string,
    submitButtonText: string,
    submitNotificationText: string,
    formErrorMessage: ContactFormSchemaMessages
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
import ContactForm from "@/components/contact-component/contact-form";
import { ContactPageData } from "@/types";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AmadeusDev | Contact",
};

export default async function Contact({ params }: { params: Promise<{ langId: string }> }) {
    const langId = (await params).langId;
    const contactPageDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getpagedata?lang=${langId}&dataname=contact`);
    const pageData: ContactPageData = contactPageDataRes.data.data.content;
    return <div className="flex justify-center items-center h-screen">
        <ContactForm pageData={pageData} backendDomain={process.env.BACKEND_DOMAIN} backendPort={process.env.BACKEND_PORT} />
    </div>

}
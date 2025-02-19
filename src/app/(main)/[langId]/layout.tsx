import HeaderComponent from "@/components/header/header-component";
import axios from "axios";
import { HeaderData } from "@/types";

export default async function MainLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ langId: string }>
}>) {

    const { langId } = await params;
    const headerPageDataRes = await axios.get(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/getpagedata?lang=${langId}&dataname=header`);
    const headerPageData: HeaderData = headerPageDataRes.data.data.content;
    return (
        <div className="bg-black min-h-screen text-white">
            <header className="absolute top-[15%] justify-center items-center w-full">
                <HeaderComponent headerPageData={headerPageData} />
            </header>
            <div className="bg-black mt-[7vw] mx-auto w-[90%] pt-[7rem]">
                {children}
            </div>
        </div>
    );
}
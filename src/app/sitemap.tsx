import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headerList = await headers();
    const host = headerList.get("host") || "example.com";
    const protocol = host.startsWith("localhost") ? "http" : "https";
    const domain = `${protocol}://${host}`;


    return [
        { url: `${domain}/en/home`, lastModified: new Date() },
        { url: `${domain}/jp/home`, lastModified: new Date() },
    ];
}
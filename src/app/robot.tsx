import { MetadataRoute } from "next";
import { headers } from "next/headers";


export default async function robots(): Promise<MetadataRoute.Robots> {
    const headersList = await headers();
    const host = headersList.get("host") || "example.com";
    const protocol = host.startsWith("localhost") ? "http" : "https";
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/en/home", "/jp/home"],
                disallow: ["/404", "/not-found", "/"],
            },
        ],
        sitemap: `${protocol}://${host}/sitemap.xml`,
    };
}
import { MetadataRoute } from "next";

export async function generateSitemaps() {
    const sitemapIndexes = [{ id: 0 }]

    return sitemapIndexes;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://alvinchang.dev",
            lastModified: new Date(),
        }
    ];
}
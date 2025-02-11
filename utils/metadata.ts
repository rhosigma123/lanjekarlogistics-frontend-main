import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Sovorun Technology",
  description: "",
  metadataBase: new URL("https://sovorun.com"),
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
    site: "@sovorun",
  },
  openGraph: {
    title: "Sovorun Technology",
    description: "",
    images: [
      {
        url: "https://sovorun.com/opengraph-image.png",
        width: 4800,
        height: 2520,
      },
    ],
    url: "https://sovorun.com",
    locale: "en_us",
    siteName: "sovorun",
  },
};

export function mergeMetadata(pageMetadata: Partial<Metadata>): Metadata {
  return {
    ...baseMetadata,
    ...pageMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      ...pageMetadata.openGraph,
      images: [
        ...(Array.isArray(baseMetadata.openGraph?.images)
          ? baseMetadata.openGraph.images
          : baseMetadata.openGraph?.images
          ? [baseMetadata.openGraph.images]
          : []),
        ...(Array.isArray(pageMetadata.openGraph?.images)
          ? pageMetadata.openGraph.images
          : pageMetadata.openGraph?.images
          ? [pageMetadata.openGraph.images]
          : []),
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      ...pageMetadata.twitter,
      images: [
        ...(Array.isArray(baseMetadata.twitter?.images)
          ? baseMetadata.twitter.images
          : baseMetadata.twitter?.images
          ? [baseMetadata.twitter.images]
          : []),
        ...(Array.isArray(pageMetadata.twitter?.images)
          ? pageMetadata.twitter.images
          : pageMetadata.twitter?.images
          ? [pageMetadata.twitter.images]
          : []),
      ],
    },
  };
}

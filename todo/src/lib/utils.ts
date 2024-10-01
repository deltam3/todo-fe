import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "침착맨 Todo - 침착맨 방송 컨텐츠 추천해주세요",
  description = "침착맨의 방송 컨텐츠 추천",
  image = "/logo.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@침착맨",
    },
    icons,
    // metadataBase: new URL("https://.vercel.app/"),
  };
}

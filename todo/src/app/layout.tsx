import Navbar from "@/components/NavBar";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Navbar />

          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}

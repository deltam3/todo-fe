import Navbar from "@/components/NavBar";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Navbar />

          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

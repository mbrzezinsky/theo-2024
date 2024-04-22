import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import {NextSSRPlugin} from "@uploadthing/react/next-ssr-plugin";

import {ClerkProvider} from "@clerk/nextjs";
import {Inter} from "next/font/google";
import Topnav from "~/app/_components/topnav";
import {extractRouterConfig} from "uploadthing/server";
import {ourFileRouter} from "~/app/api/uploadthing/core";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Theo-2024",
    description: "Next.js tutorial app",
    icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (<ClerkProvider>
            <html lang="en">
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}/>
            <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
            <Topnav/>

            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}

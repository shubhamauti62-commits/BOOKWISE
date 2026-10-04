import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Bookwise — Read less. Remember more.",description:"A personal learning library for turning books into ideas you remember."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

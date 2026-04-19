import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Step-Up Career | Premium Recruitment Platform",
  description: "Find your dream job or the perfect candidate with Step-Up Career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-slate-200">
        <main className="flex-grow">{children}</main>
        
        <Footer />
        
        {/* Floating WhatsApp Button Placeholder */}
        <a 
          href="https://wa.me/917697334430" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 0C5.385 0 0 5.386 0 12.032c0 2.128.555 4.195 1.61 6.012L.416 22.42l4.526-1.188c1.764.966 3.766 1.474 5.869 1.474v.001c6.645 0 12.032-5.386 12.032-12.032S18.676 0 12.031 0zm0 20.738c-1.802 0-3.568-.484-5.114-1.403l-.367-.217-3.364.882.898-3.281-.238-.379c-1.006-1.597-1.536-3.45-1.536-5.358C2.308 6.471 6.812 1.968 12.031 1.968c5.218 0 9.722 4.503 9.722 9.722s-4.504 9.722-9.722 9.722zm5.34-7.308c-.293-.147-1.733-.856-2.001-.954-.268-.098-.464-.147-.659.147-.195.293-.757.954-.928 1.149-.17.195-.342.22-.635.073-.293-.147-1.238-.457-2.357-1.455-.87-.775-1.458-1.732-1.629-2.025-.17-.293-.018-.452.129-.599.131-.131.293-.342.439-.513.146-.17.195-.293.293-.488.098-.195.049-.367-.024-.513-.073-.147-.659-1.589-.903-2.176-.237-.573-.478-.495-.659-.504-.17-.009-.366-.009-.561-.009-.195 0-.513.073-.781.367-.268.293-1.025 1.002-1.025 2.443 0 1.441 1.05 2.834 1.196 3.029.147.195 2.063 3.149 4.996 4.415.698.3 1.243.48 1.666.614.7.169 1.336.145 1.838.088.56-.063 1.733-.709 1.977-1.394.244-.684.244-1.27.17-1.394-.073-.122-.268-.195-.561-.342z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}

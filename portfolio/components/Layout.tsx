import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground font-sans`}>
            <Sidebar />
            <div className="md:pl-24 transition-all duration-300">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;

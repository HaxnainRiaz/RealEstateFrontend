
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import AuthProvider from '@/lib/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Real Estate Platform | Enterprise Asset Management',
    description: 'A premium real estate platform for institutional landlords and modern tenants.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} bg-[#FFFFFF] text-[#111827] antialiased`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}

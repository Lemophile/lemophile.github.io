import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import './globals.css';
import Layout from '../components/Layout';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Piwi - Personal Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

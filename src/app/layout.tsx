import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Container } from "@mui/material";

/* Roboto Font for MUI */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/** Custom Components */
import AppBar from '@/components/appbar.component';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kosmic AI - Frontend Challenge",
  description: "A simple frontend page created as a project for Kosmic AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <AppBar />
        <body className={inter.className}>
          <Container>
          {children}
          </Container>
        </body>
    </html>
  );
}

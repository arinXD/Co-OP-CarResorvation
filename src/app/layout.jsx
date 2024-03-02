"use client"
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

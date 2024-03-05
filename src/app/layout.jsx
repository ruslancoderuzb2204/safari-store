"use client";
import Header from "../containers/Header";
import { SearchProvider } from "@/context/searchContext";
import "./index.css";

export default function RootLayout({ children }) {
  return (
    <SearchProvider>
      <html lang="en">
        <body className="px-10 container">
          <Header />
          {children}
        </body>
      </html>
    </SearchProvider>
  );
}

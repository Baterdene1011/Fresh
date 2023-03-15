import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  desciption: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

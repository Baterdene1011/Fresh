import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={"w-full"}>
        <h1 className="text-center bg-red-200 text-base text-gray-800 font-bold">
          Home page
        </h1>
        <Link href={"/about/page"}>Go to about page</Link>
      </main>
    </>
  );
}

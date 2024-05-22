import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex">
      <p className="text-4xl font-medium">Next JS</p>
      <div className="ml-auto flex gap-5 p-2">
        <Link href={"/product"} className=" text-blue-600 text-lg">
          About
        </Link>

        <Link href={"/posts"} className=" text-blue-600 text-lg">
          Posts
        </Link>
        <Link href={"/product"} className=" text-blue-600 text-lg">
          Products
        </Link>
      </div>
    </nav>
  );
}

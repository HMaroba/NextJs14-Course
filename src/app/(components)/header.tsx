import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex bg-blue-600 p-3 text-white fixed z-50">
      <Link href={'/'} className="text-4xl font-medium">Next JS</Link>
      <div className="ml-auto flex gap-5 p-2">
        <Link href={"/product"} className=" text-lg hover:text-gray-600">
          About
        </Link>

        <Link href={"/posts"} className="  text-lg hover:text-gray-600">
          Posts
        </Link>
        <Link href={"/product"} className="  text-lg hover:text-gray-600">
          Products
        </Link>
      </div>
    </nav>
  );
}

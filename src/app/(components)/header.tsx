"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const currentPath = usePathname();
    
  return (
    <nav className="flex flex-row bg-blue-600 p-3  fixed z-50 w-full">
      <Link href={"/"} className="text-4xl text-white font-medium">
        Next JS
      </Link>
      <div className="ml-auto flex gap-5 p-2">
        <Link
          href={"/product"}
          className="text-white text-lg hover:text-gray-600"
        >
          About
        </Link>

        <Link
          href={"/posts"}
          className={`text-lg text-white hover:text-gray-400 ${
            currentPath === '/posts' ? 
                'text-gray-400' 
            : null
          }`}
        >
          Posts
        </Link>
        <Link
          href={"/todos"}
          className={`text-lg text-white hover:text-gray-400 ${
            currentPath === '/todos' ? 
                'text-gray-400' 
            : null
          }`}
        >
          Todos
        </Link>
        <Link
          href={"/product"}
          className="text-white  text-lg hover:text-gray-600"
        >
          Products
        </Link>
      </div>
    </nav>
  );
}

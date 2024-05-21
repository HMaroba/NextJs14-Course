import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <p className="text-4xl font-medium">Next JS 14 FULL COURSE</p>
      <Link href={'/product'} className="mt-5 text-blue-600">Products</Link>
    </main>
  );
}

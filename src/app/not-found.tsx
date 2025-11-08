import Link from "next/link";

export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-700 bg-black">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-lg">Page not found</p>
        <Link href="/" className="mt-4 text-green-600 hover:underline">Go back home</Link>
      </div>
    );
  }
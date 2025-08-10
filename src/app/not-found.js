import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        Sorry, we couldn’t find the page you’re looking for. 
        It might have been removed, renamed, or doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-white bg-[#674188] rounded-lg shadow hover:bg-[#5a3674] transition duration-200"
      >
        Go Back Home
      </Link>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Aria
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        By your side when health gets complicated. AI-powered guidance for
        navigating life&apos;s most challenging health moments.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/chat"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Start a conversation
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          View dashboard
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
        Aria Health
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl max-w-lg">
        So you&apos;ve been diagnosed with menopause&hellip;
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        Take a breath. You have questions, and that&apos;s exactly where we
        start. Aria is your personal guide through this transition &mdash;
        helping you understand what&apos;s happening, what to expect, and what
        to do next.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/chat"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Talk to Aria
        </Link>
        <Link
          href="/journey"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Explore the journey
        </Link>
      </div>
    </div>
  );
}

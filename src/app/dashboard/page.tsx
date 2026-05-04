"use client";

import Link from "next/link";

const journeyStages = [
  { label: "Early Exploration", description: "Noticing changes, learning what to expect", color: "#6366F1" },
  { label: "Active Symptoms", description: "Managing hot flashes, sleep, mood changes", color: "#EC4899" },
  { label: "Seeking Treatment", description: "Exploring HRT and other options", color: "#059669" },
  { label: "Ongoing Management", description: "Adjusting and optimizing your approach", color: "#D97706" },
];

const symptomPrompts = [
  { label: "Hot flashes", prompt: "I'm having hot flashes today. They've been" },
  { label: "Night sweats", prompt: "I had night sweats last night. Here's what happened:" },
  { label: "Sleep issues", prompt: "My sleep has been rough lately. I've been" },
  { label: "Mood changes", prompt: "I've been experiencing mood changes — specifically" },
  { label: "Brain fog", prompt: "I'm dealing with brain fog today. I've been having trouble" },
  { label: "Joint pain", prompt: "I'm noticing joint pain or stiffness, especially in my" },
  { label: "Anxiety", prompt: "I've been feeling anxious lately. It's showing up as" },
  { label: "Low energy", prompt: "My energy has been really low. I've been feeling" },
];

const quickActions = [
  {
    title: "Prepare for an appointment",
    description: "Get questions ready for your doctor",
    href: "/chat",
  },
  {
    title: "Explore treatment options",
    description: "Learn about HRT, lifestyle changes, and more",
    href: "/chat",
  },
  {
    title: "Understand a symptom",
    description: "Learn what's normal and what needs attention",
    href: "/chat",
  },
  {
    title: "Browse your journey",
    description: "Swipe through stage-by-stage guidance",
    href: "/journey",
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Your Journey</h1>
        <p className="mt-1 text-gray-600">
          Track your progress and find guidance for where you are right now.
        </p>
      </div>

      {/* Symptom Tracking */}
      <section>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
          How are you feeling today?
        </h2>
        <p className="text-xs text-gray-400 mb-3">Tap a symptom to start tracking it with Aria</p>
        <div className="flex flex-wrap gap-2">
          {symptomPrompts.map((s) => (
            <Link
              key={s.label}
              href={`/chat?prompt=${encodeURIComponent(s.prompt)}`}
              className="rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-gray-700 hover:border-pink-300 hover:bg-pink-50/50 transition"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Journey Stages */}
      <section>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
          Journey Stages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {journeyStages.map((stage) => (
            <Link
              key={stage.label}
              href="/journey"
              className="rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition block"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: stage.color }} />
                <p className="font-medium text-gray-900 text-sm">{stage.label}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-5">{stage.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition block"
            >
              <p className="font-medium text-gray-900 text-sm">{action.title}</p>
              <p className="text-xs text-gray-500 mt-1">{action.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-indigo-50 border border-indigo-100 p-6 text-center">
        <p className="text-gray-700">
          Ready to talk? Aria is here whenever you need guidance.
        </p>
        <Link
          href="/chat"
          className="mt-3 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Open chat
        </Link>
      </section>
    </div>
  );
}

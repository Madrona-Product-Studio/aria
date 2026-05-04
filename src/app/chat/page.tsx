"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

function getTextContent(parts: { type: string; text?: string }[]) {
  return (
    parts
      ?.filter((p) => p.type === "text")
      .map((p) => p.text)
      .join("") || ""
  );
}

export default function ChatPage() {
  return (
    <Suspense>
      <ChatContent />
    </Suspense>
  );
}

function ChatContent() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const isLoading = status === "submitted" || status === "streaming";

  // Pre-fill input from query param (e.g. from symptom tracking)
  useEffect(() => {
    const prompt = searchParams.get("prompt");
    if (prompt) {
      setInput(prompt);
    }
  }, [searchParams]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <div className="flex flex-1 flex-col max-w-3xl mx-auto w-full">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-5">
        {messages.length === 0 && (
          <div className="mt-16 flex flex-col items-center">
            <p className="text-xl font-semibold text-gray-800">
              Hi, I&apos;m Aria
            </p>
            <p className="mt-2 max-w-sm text-center text-sm text-gray-500 leading-relaxed">
              I&apos;m here to help you navigate the menopause transition.
              Whatever you&apos;re experiencing, you&apos;re not alone.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg">
              {[
                {
                  label: "I think I\u2019m starting menopause",
                  prompt: "I think I might be starting menopause. I've been noticing some changes but I'm not sure what's going on.",
                },
                {
                  label: "Help me understand HRT options",
                  prompt: "Can you help me understand what hormone replacement therapy options are available and how to think about them?",
                },
                {
                  label: "I can\u2019t sleep and it\u2019s getting worse",
                  prompt: "My sleep has gotten really bad lately — trouble falling asleep, waking up at 3am, night sweats. What can I do?",
                },
                {
                  label: "Prepare me for a doctor visit",
                  prompt: "I have a doctor appointment coming up to talk about menopause. Help me prepare — what should I ask?",
                },
                {
                  label: "My mood swings are overwhelming",
                  prompt: "I've been having really intense mood swings — irritability, anxiety, sometimes crying for no reason. Is this menopause?",
                },
                {
                  label: "What lifestyle changes actually help?",
                  prompt: "What lifestyle changes actually make a difference for menopause symptoms? Diet, exercise, supplements — what works?",
                },
              ].map((starter) => (
                <button
                  key={starter.label}
                  onClick={() => sendMessage({ text: starter.prompt })}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-left text-sm text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50 transition"
                >
                  {starter.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) =>
          m.role === "user" ? (
            <div key={m.id} className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-br-md bg-indigo-600 px-4 py-2.5 text-sm text-white leading-relaxed">
                {getTextContent(m.parts as { type: string; text?: string }[])}
              </div>
            </div>
          ) : (
            <div key={m.id} className="flex justify-start">
              <div className="max-w-[85%] text-sm text-gray-800 leading-relaxed">
                <div className="aria-prose">
                  <ReactMarkdown>
                    {getTextContent(
                      m.parts as { type: string; text?: string }[]
                    )}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )
        )}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 text-sm text-gray-400 py-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" />
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse [animation-delay:0.2s]" />
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 px-4 py-4 bg-white">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about your menopause journey..."
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

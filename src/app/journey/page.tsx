"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { journeyStages } from "@/lib/journey-data";
import type { JourneyCard, JourneyStage } from "@/lib/journey-data";

// Build flat screen list
type Screen =
  | { type: "cover" }
  | { type: "chapter"; stage: JourneyStage; stageIndex: number }
  | {
      type: "card";
      card: JourneyCard;
      stage: JourneyStage;
      cardIndex: number;
      stageIndex: number;
    };

function buildScreens(): Screen[] {
  const screens: Screen[] = [{ type: "cover" }];
  journeyStages.forEach((stage, si) => {
    screens.push({ type: "chapter", stage, stageIndex: si });
    stage.cards.forEach((card, ci) => {
      screens.push({ type: "card", card, stage, cardIndex: ci, stageIndex: si });
    });
  });
  return screens;
}

const SCREENS = buildScreens();

// --- Cover ---
function CoverScreen() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 text-center bg-gradient-to-b from-indigo-50 to-white">
      <h1 className="text-3xl font-bold text-gray-900">Your Menopause Journey</h1>
      <p className="mt-3 text-gray-600 max-w-xs leading-relaxed">
        Swipe through the stages to understand where you are and what comes next.
      </p>
      <p className="mt-8 text-xs text-gray-400">Swipe to begin &rarr;</p>
    </div>
  );
}

// --- Chapter ---
function ChapterScreen({ stage, stageIndex }: { stage: JourneyStage; stageIndex: number }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 text-center" style={{ backgroundColor: stage.colorLight }}>
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: stage.color }}>
        Stage {stageIndex + 1} of {journeyStages.length}
      </span>
      <h2 className="mt-3 text-2xl font-bold text-gray-900">{stage.name}</h2>
      <p className="mt-1 text-sm text-gray-500">{stage.subtitle}</p>
      <p className="mt-5 text-sm text-gray-700 leading-relaxed max-w-sm">{stage.description}</p>
      <p className="mt-6 text-xs text-gray-400">{stage.cards.length} cards &rarr;</p>
    </div>
  );
}

// --- Flippable Card ---
function CardScreen({
  card,
  stage,
  cardIndex,
}: {
  card: JourneyCard;
  stage: JourneyStage;
  cardIndex: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const [flipAnimating, setFlipAnimating] = useState(false);

  function handleFlip() {
    if (flipAnimating) return;
    setFlipAnimating(true);
    setFlipped((f) => !f);
    setTimeout(() => setFlipAnimating(false), 500);
  }

  return (
    <div
      className="h-full w-full cursor-pointer"
      onClick={handleFlip}
      style={{ perspective: 1200 }}
    >
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col p-8 rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            backgroundColor: stage.color,
          }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white/60">
            Card {cardIndex + 1} of {stage.cards.length}
          </span>
          <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
          <p className="mt-4 text-white/90 text-sm leading-relaxed flex-1">
            {card.frontText}
          </p>
          <p className="mt-auto pt-4 text-xs text-white/50 text-center">
            Tap to flip &darr;
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col p-8 rounded-2xl bg-white overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: stage.color }}>
            {card.backTitle}
          </h4>
          <ul className="mt-4 space-y-2.5 flex-1">
            {card.backPoints.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: stage.color }} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div
            className="mt-4 rounded-xl p-4 border"
            style={{
              backgroundColor: stage.colorLight,
              borderColor: stage.color + "20",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: stage.color }}>
              Action step
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">{card.actionStep}</p>
          </div>
          <p className="mt-3 text-xs text-gray-400 text-center">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}

// --- Main Deck ---
export default function JourneyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [baseIndex, setBaseIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animScreen, setAnimScreen] = useState<Screen | null>(null);
  const [animType, setAnimType] = useState<"exit" | "enter" | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = SCREENS.length;

  const navigate = useCallback(
    (dir: number) => {
      if (animating) return;
      const next = currentIndex + dir;
      if (next < 0 || next >= total) return;
      setAnimating(true);

      if (dir > 0) {
        setBaseIndex(next);
        setAnimScreen(SCREENS[currentIndex]);
        setAnimType("exit");
        setCurrentIndex(next);
        setTimeout(() => {
          setAnimScreen(null);
          setAnimType(null);
          setAnimating(false);
        }, 280);
      } else {
        setAnimScreen(SCREENS[next]);
        setAnimType("enter");
        setTimeout(() => {
          setBaseIndex(next);
          setCurrentIndex(next);
          setAnimScreen(null);
          setAnimType(null);
          setAnimating(false);
        }, 300);
      }
    },
    [animating, currentIndex, total]
  );

  // Keyboard nav
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }

  // Attach non-passive touchmove to prevent scroll during swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
    }
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > dy && Math.abs(dx) > 44) {
      navigate(dx < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  }

  function renderScreen(scr: Screen) {
    if (scr.type === "cover") return <CoverScreen />;
    if (scr.type === "chapter")
      return <ChapterScreen stage={scr.stage} stageIndex={scr.stageIndex} />;
    if (scr.type === "card")
      return (
        <CardScreen
          card={scr.card}
          stage={scr.stage}
          cardIndex={scr.cardIndex}
        />
      );
    return null;
  }

  // Progress indicator
  const progress = total > 1 ? currentIndex / (total - 1) : 0;

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gray-50 px-4 py-6">
      <style>{`
        @keyframes dealOff {
          0%   { transform: translateX(0) rotate(0deg); }
          100% { transform: translateX(-115%) rotate(-3deg); }
        }
        @keyframes stackOn {
          0%   { transform: translateX(-115%) rotate(-3deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
      `}</style>

      <div className="relative flex items-center gap-4">
        {/* Left arrow — desktop */}
        <button
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          &larr;
        </button>

        {/* Card viewport */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden rounded-2xl shadow-lg bg-white"
          style={{
            width: "min(400px, calc(100vw - 32px))",
            height: "min(640px, calc(100dvh - 180px))",
            touchAction: "none",
          }}
        >
          {/* Base layer */}
          <div className="absolute inset-0">
            {renderScreen(SCREENS[baseIndex])}
          </div>

          {/* Animation layer */}
          {animScreen && (
            <div
              className="absolute inset-0"
              style={{
                animation:
                  animType === "exit"
                    ? "dealOff 280ms cubic-bezier(0.4,0,0.8,0.6) forwards"
                    : "stackOn 300ms cubic-bezier(0.2,0,0.1,1) forwards",
                willChange: "transform",
              }}
            >
              {renderScreen(animScreen)}
            </div>
          )}
        </div>

        {/* Right arrow — desktop */}
        <button
          onClick={() => navigate(1)}
          disabled={currentIndex === total - 1}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          &rarr;
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full max-w-[400px]">
        <div className="h-1 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-400 text-center">
          {currentIndex + 1} of {total}
        </p>
      </div>
    </div>
  );
}

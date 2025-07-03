// app/editor/page.tsx
"use client";
import ClickSpark from "@/components/animated/click-spark";
import EditorLayout from "./editor-layout";

export default function EditorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          My arsenal.
        </h1>
        <p className="text-base md:text-lg text-gray-300 lg:max-w-2xl mx-4 lg:mx-auto mt-3">
          I started as a frontend developer, now I{"'"}m expanding into backend,
          and DevOps. My goal: become a well-rounded engineer and visionary
          leader who bridges design, engineering, and strategy.
        </p>
      </section>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="mx-8 lg:mx-0">
          <EditorLayout />
        </div>
      </ClickSpark>
    </main>
  );
}

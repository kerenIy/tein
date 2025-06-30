// app/editor/page.tsx
"use client";
import EditorLayout from "./editor-layout";

export default function EditorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Not just code.
        </h1>
        <p className="text-base md:text-lg text-gray-300 lg:max-w-2xl mx-auto mt-3">
          I started as a frontend developer, now I'm expanding into backend,
          mobile, and DevOps. My goal: become a well-rounded engineer and
          visionary leader who bridges design, engineering, and strategy.
        </p>
      </section>
      <EditorLayout />
    </main>
  );
}

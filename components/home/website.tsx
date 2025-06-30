"use client";
import Image from "next/image";

export default function Website() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-snug">
        Products with Purpose
      </h1>
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        A curated collection of real-world projects — not just built, but
        thoughtfully designed, led, and executed.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left Grid */}
        <div className="flex flex-col gap-6">
          {/* Large top image */}
          <div className="bg-white rounded-xl border-4 border-[#3b82f6] p-2">
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </div>

          {/* Two bottom images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border-4 border-[#f472b6] p-2">
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
            <div className="bg-white rounded-xl border-4 border-[#5eead4] p-2">
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="bg-white rounded-xl border-4 border-[#ef4444] p-2 h-[85.5%] flex flex-col gap-6 justify-between">
          <div className="h-[100%] aspect-[1/1.3] bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </main>
  );
}

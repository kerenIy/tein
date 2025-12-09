"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "../animated/animated-content";

export default function Website() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16 my-4">
      {" "}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
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
            <Link href="https://www.thetourafrica.com/" target="_blank">
              <div className="bg-white rounded-xl border-4 border-[#5eead4] p-2 overflow-hidden group">
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/projects/tour.png"
                    alt="Tour"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                    <h3 className="text-white text-xl font-semibold">Tour</h3>
                    <p className="text-lg text-gray-300">
                      An AI-powered engine for planning travel and discovering
                      events and for creating experiences. Tour allows you to
                      book apartments, rent cars, and find events.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Two bottom images */}
            <div className="grid grid-cols-2 gap-6">
              <Link href="https://foamlaundryapp.com/" target="_blank">
                <div className="bg-white rounded-xl border-4 border-[#f472b6] p-2 overflow-hidden group">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/projects/foam.png"
                      alt="Foam"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                      <h3 className="text-white text-xl font-semibold">Foam</h3>
                      <p className="text-md text-gray-100">
                        A laundry pickup and delivery app for urban
                        professionals. It streamlines the process of washing and
                        dry-cleaning laundry.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="http://soundminddigitalhealth.com/" target="_blank">
                <div className="bg-white rounded-xl border-4 border-[#ef4444] p-2 h-[94.6%] flex flex-col gap-6 justify-between overflow-hidden group">
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/projects/soundmind.png"
                      alt="Soundmind"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                      <h3 className="text-white text-2xl font-semibold">
                        Soundmind
                      </h3>
                      <p className="text-md text-gray-100">
                        A mental wellness platform for therapy and community.
                        Soundmind connects mental health professionals with
                        those in need of mental health services.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Grid */}
          <Link href="https://ankurbot.com/" target="_blank">
            <div className="bg-white rounded-xl border-4 border-[#3b82f6] p-2 overflow-hidden group">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/projects/ankurbot-sc.png"
                  alt="Ankurbot"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                  <h3 className="text-white text-[22px] font-semibold">
                    Ankurbot
                  </h3>
                  <p className="text-[17.5px] text-gray-100">
                    Ankurbot is a software solutions that allows users to
                    create, train and deploy AI assitants (bots) to handle
                    customer support and other user interactions.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>{" "}
      </AnimatedContent>
    </main>
  );
}

"use client";
import Image from "next/image";

const experts = [
  {
    name: "Frontend Reactive Architecture",
    location: "Luca Mezzalira",
    image: "/reactive.png",
  },
  {
    name: "Fundamentals of Software Architecture",
    location: "Mark Richards & Neal Ford",
    image: "/architecture.png",
  },
  // {
  //   name: "Fundamentals of Backend Engineering",
  //   location: "Hussein Nasser",
  //   image: "/fobee.png",
  // },
  {
    name: "NodeJs for Beginners",
    location: "Youtube",
    image: "/nodejs.png",
  },
];

export default function FindAPro() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-12">
      <div className="lg:flex justify-between items-center mb-6">
        <div className="">
          {" "}
          <h2 className="text-3xl font-bold">Evolving as an Engineer</h2>
          <p className="text-left text-gray-300 mt-3 mb-3 lg:mb-0 max-w-2xl">
            Why the transition? To lead with empathy and build at scale — from
            pixels to containers. Here are some resources I'm using.
          </p>
        </div>
        <div className="mt-5 lg:mt-0 space-x-3">
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
            View Resume
          </button>
          <button className="bg-[#111] text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">
            Github
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {experts.map((expert, idx) => (
          <div key={idx} className="min-w-[200px] max-w-[240px] shrink-0">
            <div className="w-full h-[180px] bg-gray-800 rounded-xl overflow-hidden mb-3">
              <Image
                src={expert.image}
                alt={expert.name}
                width={240}
                height={140}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <p className="text-sm font-medium">{expert.name}</p>
                <p className="text-xs text-white/70">{expert.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

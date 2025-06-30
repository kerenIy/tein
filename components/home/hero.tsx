import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-radial from-[#0a0a0a] via-blue-800/40 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Build. Lead. Think.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          I'm Keren Iyalla — a software engineer shaping scalable products from
          frontend to backend.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-full bg-white text-black font-medium">
            View Resume
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-900 border border-white/20 text-white font-medium">
            GitHub Repo
          </button>
        </div>

        <div className="mt-16 w-full max-w-5xl rounded-lg border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Background images */}
          <div className="">
            <img
              src="/patterns.jpg"
              alt=""
              className="absolute top-0 inset-0 z-0"
            />
            <img
              src="/blurr.png"
              alt=""
              className="absolute top-0 inset-0 z-0 opacity-[0.3] h-[520px] w-full rounded-[24px]"
            />
          </div>

          {/* Emoji + Text */}
          <div className="absolute z-10 top-6 left-6 flex items-center space-x-4">
            <img
              src="/myemoji.png"
              alt="My emoji"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="text-white text-xl font-semibold">
              Hello, I’m Keren!
            </span>
          </div>

          {/* Main Image or Content */}
          <div className="relative z-[1] pt-32 pb-12 px-8">
            {/* Your main image or additional content goes here */}
            <img
              src="/some-other-content.png"
              alt="Main content"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

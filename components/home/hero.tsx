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

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-full bg-white text-black font-medium">
            <a href="/resume.pdf" target="_blank">
              View Resume
            </a>
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-900 border border-white/20 text-white font-medium">
            <a href="https://github.com/kerenIy" target="_blank">
              GitHub
            </a>
          </button>
        </div>

        {/* Showcase Box */}
        <div className="mt-16 w-full max-w-5xl rounded-lg border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Background images */}
          <div className="absolute inset-0 z-0 h-full">
            <img
              src="/patterns.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
            <img
              src="/blurr.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-30 rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 p-8">
            <div className="flex justify-center md:justify-start">
              <img
                src="/myemoji.png"
                alt="My emoji"
                width={200}
                height={200}
                className="rounded-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center lg:text-right md:flex-1 flex flex-col justify-center">
              <span className="text-white text-2xl font-semibold block mb-4">
                Hello, I’m Keren!
              </span>
              <p className="max-w-[500px]">
                A software engineer focused on building scalable and
                user-centered frontend web applications. I care deeply about
                creating products that are intuitive, accessible, and built to
                last. I’ve led cross-functional teams, worked closely with
                designers and stakeholders, and contributed to both the
                technical and product direction of projects. I'm also expanding
                my skills into backend and DevOps to become a more well-rounded
                engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

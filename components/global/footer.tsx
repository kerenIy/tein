// app/page.tsx or pages/index.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="mb-8">
          <Image
            src="/framer-icon.png" // Replace with actual icon
            alt="Framer Logo"
            width={100}
            height={100}
            className="drop-shadow-[0_0_40px_#3B82F6] animate-pulse"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Let’s Build Together
        </h1>
        <p className="text-gray-400 max-w-xl text-lg mb-6">
          Open to freelance, collaboration, or full-time roles. Let’s create
          something impactful.
        </p>
        {/* <div className="flex gap-4">
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:opacity-90 transition">
            Start for free
          </button>
          <button className="bg-[#1f1f1f] text-white border border-gray-700 px-6 py-3 rounded-full hover:opacity-90 transition">
            Start with AI
          </button>
        </div> */}
      </section>

      {/* Footer */}
      <div
        className="flex justify-center
      items-center"
      >
        {" "}
        <footer className="w-full px-8 py-16 bg-black text-sm grid grid-cols-2 md:grid-cols-6 gap-6 text-gray-400">
          {/* <div>
            <h4 className="text-white font-semibold mb-3">Projects</h4>
            <ul className="space-y-1">
              <li>Soundmind</li>
              <li>Foam Laundry</li>
              <li>Kiasup</li>
              <li>Ridebuddy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Compare</h4>
            <ul className="space-y-1">
              <li>Squarespace</li>
              <li>Wordpress</li>
              <li>Unbounce</li>
              <li>Webflow</li>
              <li>Figma</li>
              <li>Wix</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Socials</h4>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>X Twitter</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
              <li>Threads</li>
              <li>TikTok</li>
            </ul>
          </div> */}
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleEmailClick = () => {
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async () => {
    if (!email.trim() || !message.trim()) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const result = await res.json();

      if (
        !res.ok ||
        result.success === false ||
        (result.data && result.data.error)
      ) {
        setStatus("error");
        console.error("Resend error:", result.data?.error);
        return;
      }

      setStatus("sent");
      setTimeout(() => {
        setShowModal(false);
        setMessage("");
        setEmail("");
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="mb-8">
          <Image
            src="/waving-hand.png"
            alt="Connect"
            width={200}
            height={200}
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

        {/* Contact Links */}
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/resume.pdf" target="_blank">
            <button className="px-4 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition">
              View Resume
            </button>
          </Link>
          <Link href="https://github.com/kerenIy" target="_blank">
            <button className="px-4 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition">
              GitHub
            </button>
          </Link>
          <Link href="https://x.com/teinsapanda" target="_blank">
            <button className="px-4 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition">
              Twitter
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/iyalla-ibitien"
            target="_blank"
          >
            <button className="px-4 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition">
              LinkedIn
            </button>
          </Link>
          <button
            onClick={handleEmailClick}
            className="px-4 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition"
          >
            Email Me
          </button>
        </div>
      </section>

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#1a1a1a] p-6 rounded-lg w-full max-w-md border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Send a message</h2>
            <p className="text-gray-400 text-sm mb-4">
              Your message will be sent to ibiteiniyalla@gmail.com
            </p>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 rounded bg-black border border-gray-600 text-white"
            />
            {!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (
              <p className="text-red-400 text-sm mb-2">
                Enter a valid email address.
              </p>
            ) : null}

            {/* Message Textarea */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={5}
              className="w-full p-3 rounded bg-black border border-gray-600 text-white resize-none mb-4"
            />
            {!message.trim() && (
              <p className="text-red-400 text-sm mb-2">Message is required.</p>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEmail("");
                  setMessage("");
                  setStatus("idle");
                }}
                className="px-4 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={
                  status === "loading" ||
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
                  !message.trim()
                }
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white disabled:opacity-50 flex items-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Email"
                )}
              </button>
            </div>

            {/* Status Feedback */}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "sent" && (
              <p className="text-green-400 text-sm mt-4">
                Message sent successfully!
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

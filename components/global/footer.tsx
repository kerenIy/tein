import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="https://ankursolutions.com/"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  Ankur Global
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/newsletter"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/subsidiaries"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  Subsidiaries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-[#0a2463]"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-600 hover:text-[#0a2463]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-600 hover:text-[#0a2463]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-600 hover:text-[#0a2463]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>

            <div>
              <p className="text-sm text-gray-600">DNIL © 2023</p>
              <div className="mt-4">
                <Link href="/" className="text-2xl font-bold text-[#0a2463]">
                  DNIL
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <Link
            href="/contact"
            className="inline-block bg-[#0a2463] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </footer>
  );
}

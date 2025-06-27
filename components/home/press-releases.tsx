import Link from "next/link"

const pressReleases = [
  {
    id: 1,
    date: "May 15, 2023",
    title:
      "DNIL signs 'AI-based Alliance' for Status with the AIST Partner Network, solidifying cloud leadership position (Global) (Vol.1)",
    link: "#",
  },
  {
    id: 2,
    date: "May 12, 2023",
    title: "DNIL announces selection of Partner candidates",
    link: "#",
  },
]

export default function PressReleases() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Press Releases</h2>
        <p className="mb-8">Get the latest announcements from the DNIL global press room.</p>

        <div className="space-y-4">
          {pressReleases.map((release) => (
            <div key={release.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-2">{release.date}</p>
                  <h3 className="font-medium">{release.title}</h3>
                </div>
                <Link href={release.link} className="text-[#0a2463] flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/press" className="btn-secondary">
            See All
          </Link>
        </div>
      </div>
    </section>
  )
}

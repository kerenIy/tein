import Link from "next/link";

const notices = [
  {
    id: 1,
    date: "Jan 15, 2023",
    title:
      "A Note of Caution about Fraudulent Job Recruitment emails posing as DNIL",
    link: "#",
  },
  {
    id: 2,
    date: "Sep 27, 2022",
    title: "A Note of Caution about Fraudulent Job Recruitment",
    link: "#",
  },
];

export default function ImportantNotices() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="section-title">Important Notices</h2>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white p-4 border rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-2">{notice.date}</p>
                <h3 className="font-medium">{notice.title}</h3>
              </div>
              <Link href={notice.link} className="text-[#0a2463] flex-shrink-0">
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/notices" className="btn-secondary">
          See All
        </Link>
      </div>
    </section>
  );
}

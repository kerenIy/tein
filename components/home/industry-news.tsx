import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    tag: "New",
    image: "/news1.jpg",
    title:
      "Upcoming Conference on DNIL Group's New Management Plan 'Inspire the Next'",
    link: "#",
  },
  {
    id: 2,
    tag: "New",
    image: "/news2.jpg",
    title: "AI-powered video analytics for rapid disaster response",
    link: "#",
  },
  {
    id: 3,
    tag: "New",
    image: "/news3.jpg",
    title: "DNIL Urban Climate for Building Virtual Supply Chain Risk Model",
    link: "#",
  },
  {
    id: 4,
    tag: "New",
    image: "/news4.jpg",
    title: "Launch: New power conversion system for energy storage plant",
    link: "#",
  },
];

export default function IndustryNews() {
  return (
    <section className="py-16 container mx-auto px-[10%]">
      <h2 className="font-bold text-[#0C0C0C] text-[30.5px] mb-5">
        Industry News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="card bg-[#F4F4F4] rounded-[8px] relative"
          >
            <div className="relative">
              <div className="absolute top-3 left-0 bg-[#0A0045] text-white text-xs py-1 px-2 z-10 rounded-r-[8px] font-semibold">
                {item.tag}
              </div>
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={300}
                height={200}
                className="w-full rounded-t-[8px] h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-normal text-[#0C0C0C] text-[16px] leading-[30px] mb-4">
                {item.title}
              </h3>
              <div className="flex justify-end absolute bottom-4 right-5 bg-[#0C0C0C] text-white rounded-[4px] p-1">
                <Link href={item.link} className="text-[#fff] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
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
          </div>
        ))}
      </div>
    </section>
  );
}

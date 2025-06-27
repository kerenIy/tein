import Image from "next/image";
import Link from "next/link";

const sidebarItems = [
  { id: 1, name: "Business Solutions" },
  { id: 2, name: "Product Solutions" },
  { id: 3, name: "Security Solutions" },
  { id: 4, name: "Custom Software Development" },
  { id: 5, name: "Analytics & AI" },
  { id: 6, name: "Cloud Services & Solutions" },
  { id: 7, name: "Migration & Digital Transformation" },
  { id: 8, name: "Technical Support & Maintenance" },
];

export default function ProductsSolutions() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="section-title">Products & Solutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="bg-[#0a2463] text-white p-3 mb-1">
            <h3 className="font-medium">Business Solutions</h3>
          </div>
          <ul className="border border-gray-200">
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <Link href="#" className="block py-2 px-3 hover:bg-gray-50">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Digital</h3>
              <p className="text-sm mb-4">
                Find everything you need for your digital transformation
                journey.
              </p>

              <Link
                href="#"
                className="text-[#0a2463] flex items-center text-sm mb-4"
              >
                <span>Digital Solutions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                className="text-[#0a2463] flex items-center text-sm"
              >
                <span>IT Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative h-64">
              <Image
                src="/products.jpg"
                alt="Digital solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

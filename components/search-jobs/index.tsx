import Image from "next/image";
import Link from "next/link";

const jobCategories = [
  {
    title: "Project/Program Management",
    jobs: 215,
  },
  {
    title: "Engineering & Science",
    jobs: 1565,
  },
  {
    title: "Sales, Marketing & Product Management",
    jobs: 209,
  },
  {
    title: "Finance",
    jobs: 119,
  },
  {
    title: "IT, Telecom & Internet",
    jobs: 1136,
  },
  {
    title: "Production & Skilled Trades",
    jobs: 252,
  },
  {
    title: "Supply Chain",
    jobs: 9,
  },
  {
    title: "Administration & Facilities",
    jobs: 166,
  },
  {
    title: "Human Resources",
    jobs: 117,
  },
  {
    title: "Customer Service & Contact Center Operations",
    jobs: 255,
  },
  {
    title: "Browse Opportunities",
    jobs: null,
  },
];

export default function SearchJobs() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/career-bg.jpg"
            alt="Career opportunities at DNIL"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Explore Careers at DNIL</h1>
          <p className="text-xl max-w-2xl mb-8">
            Join us and contribute to creating innovative solutions that better
            people's lives and preserve our planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
            <input
              type="text"
              placeholder="Search by keyword or job title"
              className="flex-grow px-4 py-3 rounded-md text-gray-800"
            />
            <input
              type="text"
              placeholder="Search by location"
              className="flex-grow px-4 py-3 rounded-md text-gray-800"
            />
            <button className="bg-[#0a2463] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <p className="text-xl max-w-4xl mx-auto">
            <span className="font-bold">
              Technology is driving today's fast-paced world
            </span>{" "}
            — and we create new innovations that transform industries and
            society for the better. But without the brightest, most creative
            people — people like you — our achievements would not be possible.
            Join us and together let's start powering good to make the world a
            better place.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Discover your ideal career—
          </h2>
          <p className="text-2xl text-center mb-12">anywhere in the world</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <Link
                key={index}
                href={
                  category.jobs
                    ? `/careers/search-jobs/${category.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    : "/careers/browse"
                }
                className="bg-gray-400 hover:bg-gray-500 transition-colors p-6 flex flex-col justify-center items-center text-center text-white h-[180px]"
              >
                <h3 className="font-medium mb-2">{category.title}</h3>
                {category.jobs && (
                  <p className="text-sm">{category.jobs} available jobs</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

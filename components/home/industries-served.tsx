import Link from "next/link";

export default function IndustriesServed() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Industries Served</h2>
        <p className="mb-8">Search for companies by region or industry.</p>

        <div className="flex justify-center">
          <Link
            href="/industries"
            className="bg-white text-[#0a2463] py-2 px-6 rounded-md hover:bg-gray-100 transition-all"
          >
            See All
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function CoreValues() {
  return (
    <div className="py-16 bg-gray-50 relative">
      {" "}
      <div className="mx-auto flex flex-col px-16">
        <h2 className="section-title">Core Values</h2>
        <p className="mb-12">
          At DNIL Network Infrastructure Limited (DNIL), our core values shape
          our approach to innovation, service, and success. These principles
          define who we are and how we operate, ensuring that we consistently
          deliver reliable solutions that meet the highest standards.
        </p>
      </div>
      <Image
        src="/core.jpg"
        alt="Core Values"
        width={1920}
        height={1080}
        objectFit="cover"
        className=""
      />
      <section className="absolute bottom-[-45px] left-[60px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Our Approach</h3>
              <p className="text-sm">
                A data-led, people-first approach to digital transformation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Environmental</h3>
              <p className="text-sm">
                Net-zero by 2030 and building sustainable strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Social</h3>
              <p className="text-sm">
                We believe in equity, diversity, inclusion and a world of equal
                opportunity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Governance</h3>
              <p className="text-sm">
                Good governance is essential to our business and the trust of
                our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

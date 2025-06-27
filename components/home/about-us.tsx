import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-bg.png"
          alt="Digital wave background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="py-16 relative z-10 container mx-auto px-[10%]">
        <h2 className="section-title">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6 rounded-lg">
            <p className="text-sm mb-4">
              The DNIL group is an international digital innovation company that
              provides consulting, technology, and professional services. Our
              purpose is to deliver on the promise of technology and human
              ingenuity.
            </p>
            <p className="text-sm mb-6">
              We embrace the power of change to create long-lasting value in
              every direction for our clients, people, shareholders, partners
              and communities. Our purpose is to continue our digital
              transformation in a smart, sustainable and inclusive way.
            </p>
            <Link href="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>

          <div className="relative h-80 md:h-96">
            <Image
              src="/about.jpg"
              alt="Team members"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

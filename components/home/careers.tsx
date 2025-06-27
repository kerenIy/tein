import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="section-title">Careers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-6">
            At DNIL, we're building a culture where great people do their best
            work. We're always looking for talented individuals to join our
            team.
          </p>

          <Link href="/careers" className="btn-primary inline-block">
            View Open Positions
          </Link>
        </div>

        <div className="relative h-80">
          <Image
            src="/top-careers.jpg"
            alt="Team members in office"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

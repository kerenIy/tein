import Image from "next/image";
import Link from "next/link";

export default function MeetTeam() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-80">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Team members"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
          <p className="mb-6">
            Meet our financial leaders, our management team, and our board
            members. Together, they guide our company with vision, integrity,
            and a commitment to excellence.
          </p>

          <Link href="/team" className="btn-primary inline-block">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

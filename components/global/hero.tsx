import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Digital wave background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-[10%] h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl mb-8">
          <p className="mb-2 leading-[52.5px] text-[20px] font-light">
            In a world of change, we must chart our own course.
            <br /> Asking what{"'"}s next is what moves us forward.
            <br />
            It{"'"}s what helps us solve the world{"'"}s most formidable
            challenges. <br />
            It{"'"}s what leads to infinite possibilities.
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold">Inspire the next</h1>
      </div>
    </section>
  );
}

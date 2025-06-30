import Image from "next/image";

export default function Canvas() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="bg-[#101010] w-full h-[400px] flex items-center justify-center border border-gray-700 rounded-lg">
        <div className="text-center">
          <div className="bg-white text-black px-4 py-2 font-serif text-xl inline-block">
            The ultimate <br /> camera app.
          </div>
          <button className="mt-4 bg-white text-black px-3 py-1 rounded text-sm">
            Get app
          </button>
          <div className="mt-6">
            <Image
              src="/mock-phone.png"
              alt="Phone mockup"
              width={120}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

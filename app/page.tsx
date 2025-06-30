import EditorPage from "@/components/home/editor";
import FindAPro from "@/components/home/find-a-pro";
import Hero from "@/components/home/hero";
import Website from "@/components/home/website";

export default function Home() {
  return (
    <main>
      <>
        <Hero />
        <EditorPage />
        <Website />
        <FindAPro />
      </>
    </main>
  );
}

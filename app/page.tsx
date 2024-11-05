import HomePage from "@/components/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-[100px]">
      <section id="home" className="w-full">
        <HomePage />
      </section>
    </main>
  );
}

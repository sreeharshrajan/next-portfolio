import Image from "next/image";
import Nav from "@/components/layout/nav";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
    </main>
  );
}

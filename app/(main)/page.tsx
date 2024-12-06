import Content from "@/components/content";
import Navbar from "@/components/navbar/MainNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl px-6 flex items-center mx-auto">
        <Content />
      </div>
    </>
  );
}

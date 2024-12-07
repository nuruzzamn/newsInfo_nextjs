import Content from "@/components/content";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Top section: Navbar  */}
      <Navbar />
      {/* Middle section: Main content  */}
      <div className="max-w-7xl flex items-center mx-auto">
        <Content />
      </div>
    </>
  );
}

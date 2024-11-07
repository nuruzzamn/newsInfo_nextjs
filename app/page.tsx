import Content from "@/components/content";
import Navbar from "@/components/navbar/MainNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-4">
      <Navbar />
      <Content />
    </div>
  );
}

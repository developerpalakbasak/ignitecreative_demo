import Contact from "@/components/section/Contact";
import Feature from "@/components/section/Feature";
import Hero from "@/components/section/Hero";
import Navbar from "@/components/section/Navbar";
import Service from "@/components/section/Service";
import StartProject from "@/components/section/StartProject";
import Testimonials from "@/components/section/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans">
      <main className="min-h-screen flex w-full flex-col py-8 px-12 sm:items-start">
      
      {/* <Navbar/> */}
      <Hero/>
      <Service/>
      <Testimonials/>
      <StartProject/>
      <Feature/>
      <Contact/>

      </main>
    </div>
  );
}

import Image from "next/image";
import LandingPage from "./components/landingPage/page";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground mx-auto w-full flex flex-col">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

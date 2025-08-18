import LandingPage from "./components/landingPage/page";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground mx-auto w-full flex flex-col">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

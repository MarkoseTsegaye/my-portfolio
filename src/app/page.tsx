import LandingPage from "./components/landingPage/page";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/Footer";
import { HeadshotProvider } from "./components/HeadshotProvider";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground mx-auto w-full flex flex-col">
      <HeadshotProvider>
        <Navbar />
        <LandingPage />
      </HeadshotProvider>
      <Footer />
    </div>
  );
}

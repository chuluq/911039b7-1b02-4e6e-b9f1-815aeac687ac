import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PricingList from "../components/PricingList";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <PricingList />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}

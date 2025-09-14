import Hero from "./Components/Hero";
import Services from "./Components/service";
import Contact from "./Components/contact";
import PromoBanner from "./Components/PromoBanner";
import WhyChooseUs from "./Components/WhyChooseUs";

import Reviews from "./Components/reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-1 w-full bg-yellow-500" />
      <Services />
      <PromoBanner />
      <Reviews />
      <WhyChooseUs />
      <Contact />
      
    </main>
  );
}


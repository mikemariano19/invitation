import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";


export default function Home() {
  return (
    <div className="container -z-50 min-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth max-w-5xl mx-auto flex flex-col bg-gray-50">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )};
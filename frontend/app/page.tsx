import Hero from "./components/hero";
import Reception from "./components/reception";
import Gallery from "./components/gallery";
import Event from "./components/event";


export default function Home() {
  return (
    <div className="container -z-50 min-h-screen max-w-5xl mx-auto flex flex-col bg-gray-50">
      <Hero />
      <Event />
      <Reception />
      <Gallery />
    </div>
  )};
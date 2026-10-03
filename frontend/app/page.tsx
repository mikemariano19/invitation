import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Event from "./components/event";
import SafetyAndGifts from "./components/safetyAndGifts";
import Godparents from "./components/godparents";


export default function Home() {
  return (
    <div className="container min-h-screen max-w-5xl mx-auto flex flex-col bg-gray-50">
      <Hero />
      <Event />
      <SafetyAndGifts />
      <Godparents />
      <Gallery />
    </div>
  )};
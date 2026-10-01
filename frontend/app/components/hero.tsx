import Image from "next/image";
import Countdown from "./Countdown";


export default function Hero() {
  const imagePath = "/images/baby1.jpg";


  return (
    <div className="bg-pink-200 font-body container min-h-screen snap-start snap-always max-w-5xl mx-auto flex flex-col items-center justify-center">
      <h2>A LITTLE BLESSING</h2>
      <h1 className="font-heading">BIANCA MARIANO</h1>
      <div className ="w-60 h-60 bg-white my-4 rounded-full flex items-center justify-center">
      <div>
        <Image
          src={imagePath}
          alt="Bianca Mariano"
          width={500}
          height={500}
          className=" rounded-full"
        />
        </div>
      </div>
      <h2>OUR CHRISTENING DAY</h2>
      <p>Sunday, October 25, 2026</p>

      <div className="py-10">
        <h4>COUNTDOWN TO THE CHRISTENING</h4>
        <Countdown />
      </div>

    </div>
  );
}
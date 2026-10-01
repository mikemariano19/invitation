import Image from "next/image";

export default function Venue() {
  const imagePath = "/images/casitas-resort.jpg";

  return (
    <div className="bg-gray-100 font-body container min-h-screen snap-start snap-always max-w-5xl mx-auto flex flex-col items-center justify-center">
      <h1 className="font-heading">Reception</h1>
      <h2>Casitas Resort Quatro</h2>
      <div className ="w-11/12 h-auto py-4 bg-gray-100 my-0 flex items-center justify-center">
        <Image 
        src={imagePath} 
        alt="Casitas Resort Quatro"
        width={550} 
        height={600} 
       />
      </div>
      <p>
        Address: 405 Ejercito St. Sta Cruz, Cavite City
      </p>
    </div>
  );
}
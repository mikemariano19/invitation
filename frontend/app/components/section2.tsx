import Image from "next/image";

export default function Section2() {
    const imagePath = "/images/image1.jpeg"; // Update this path to your actual image location

  return (
    <div className="bg-pink-200 font-body container min-h-screen snap-start snap-always max-w-5xl mx-auto flex flex-col items-center justify-center">
      <h2 className="font-heading"> MEET OUR LITTLE ONE</h2>
      <div className ="w-11/12 h-auto bg-gray-100 my-0 flex items-center justify-center">
        <Image
          src={imagePath}
          alt="Bianca Mariano"
          width={400}
          height={300}
        />
      </div>

    </div>
  );
}
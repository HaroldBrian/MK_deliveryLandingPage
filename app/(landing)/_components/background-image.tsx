import Image from "next/image";
import bgImage from "@/public/background.webp";

export const BackgroundImage = () => {
  return (
    <Image
      src={bgImage}
      alt="Background image"
      fill
      sizes="100vw"
      className="object-cover z-[-1]"
    />
  );
};

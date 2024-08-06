import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={"/logo.png"}
      width={36}
      height={36}
      priority
      alt={"logo"}
      className="cursor-pointer w-auto h-auto"
    />
  );
};

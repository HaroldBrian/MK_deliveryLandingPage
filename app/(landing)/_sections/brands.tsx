/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const Brands = () => {
  return (
    <section className="brands section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-y-12 xl:gap-y-0 justify-between">
          <Image
            className="brands__logo"
            src="/assets/img/brands/brand-1.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <Image
            className="brands__logo"
            src="/assets/img/brands/brand-2.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <Image
            className="brands__logo"
            src="/assets/img/brands/brand-3.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <Image
            className="brands__logo"
            src="/assets/img/brands/brand-4.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <Image
            className="brands__logo"
            src="/assets/img/brands/brand-5.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;

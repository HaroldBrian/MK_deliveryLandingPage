import Image from "next/image";

const serviceItems = [
  {
    ImgIcon: "/assets/icons/services/icon-1.svg",
    title: "General Practitioners",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    ImgIcon: "/assets/icons/services/icon-2.svg",
    title: "Pregnancy Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    ImgIcon: "/assets/icons/services/icon-3.svg",
    title: "Nutritional Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    ImgIcon: "/assets/icons/services/icon-4.svg",
    title: "Pharmaceutical Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
export const Services = () => {
  return (
    <section className="services">
      <ServiceBackground />
      <ServiceItems />
    </section>
  );
};

const ServiceBackground = () => {
  return (
    <div className="bg-services bg-cover bg-no-repeat max-w-[1366px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
      <div className="container mx-auto">
        <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
          <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
            Our best services for your solution
          </h2>
          <p className="text-white text-center flex-1 xl:text-left max-w-2xl xl:max-w-none">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sit
            aut ipsa ad tenetur. Aut quos distinctio delectus ut deleniti a
            sequi fugiat! Nostrum, tempora autem asperiores eaque ipsa harum?
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceItems = () => {
  return (
    <div className="container mx-auto mt-8 xl:-mt-[144px]">
      <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
        {serviceItems.map((item, index) => (
          <div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 border-b min-h-[288px] flex flex-col items-center text-center"
            key={index}
          >
            <div className="mb-[15px]">
              <Image
                src={item.ImgIcon}
                width={60}
                height={60}
                alt={"services-icon1"}
              />
            </div>
            <h3 className="h3 mb-[10px]">{item.title}</h3>
            <p className="font-light leading-normal max-w-[300px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

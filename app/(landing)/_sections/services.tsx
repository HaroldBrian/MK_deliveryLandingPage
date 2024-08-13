import Image from "next/image";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const serviceItems = [
  {
    ImgIcon: "/assets/icons/services/icon-1.png",
    title: "Livraison Express",
    description:
      "Recevez ou envoyez vos colis en un temps record, idéal pour les envois urgents. ",
  },
  {
    ImgIcon: "/assets/icons/services/icon-2.png",
    title: "Livraison Standard",
    description:
      "Un service fiable et économique pour vos envois non urgents. ",
  },
  {
    ImgIcon: "/assets/icons/services/icon-3.png",
    title: "Livraison Internationale",
    description:
      "Un service fiable et économique pour vos envois urgent ou non à l'extérieur. ",
  },
  {
    ImgIcon: "/assets/icons/services/icon-4.png",
    title: "Gestion des Retours",
    description:
      "Simplifiez la gestion des retours avec notre service de collecte à domicile. ",
  },
];
export const Services = () => {
  return (
    <section className="services">
      <Fade bottom duration={2000} delay={600} distance="60px">
        <ServiceBackground />
        <ServiceItems />
      </Fade>
    </section>
  );
};

const ServiceBackground = () => {
  return (
    <div className="bg-accent bg-cover bg-no-repeat max-w-[1200px] mx-4 lg:mx-auto rounded-lg lg:pt-[70px] px-6 lg:px-0 relative h-[368px] flex items-center lg:items-start -z-10">
      <div className="absolute left-0 bottom-0">
        <Image
          src="/assets/img/newsletter/pattern.svg"
          alt="newsletter"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container mx-auto">
        <div className="services__top flex items-center flex-col lg:flex-row lg:mb-[60px]">
          <Fade bottom duration={2000} delay={600} distance="60px">
            <h2 className="h2 text-white flex-1 mb-4 lg:mb-0 text-center lg:text-left">
              Des Services de Livraison Adaptés à Vos Besoins
            </h2>
            <p className="text-white text-center flex-1 lg:text-left max-w-2xl lg:max-w-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              sit aut ipsa ad tenetur. Aut quos distinctio delectus ut deleniti
              a sequi fugiat! Nostrum, tempora autem asperiores eaque ipsa
              harum?
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

const ServiceItems = () => {
  return (
    <div className="container mx-auto mt-8 lg:-mt-[144px]">
      <div className="grid lg:grid-cols-4 gap-5 px-8 lg:px-0">
        {serviceItems.map((item, index) => (
          <Flip
            key={index}
            bottom
            delay={(index + 1) * 600}
            distance="100px"
            interval={100}
            duration={2000}
          >
            <div
              className="services__item bg-white p-8 rounded-lg shadow-lg border-b min-h-[288px] flex flex-col items-center text-center"
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
          </Flip>
        ))}
      </div>
    </div>
  );
};

export default Services;

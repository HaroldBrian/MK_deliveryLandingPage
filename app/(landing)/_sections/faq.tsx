/* eslint-disable react/no-unescaped-entities */
import { RiAddFill, RiSubtractFill } from "@remixicon/react";
import Fade from "react-reveal/Fade";
import Script from "next/script";

const faqItems = [
  {
    question: "Comment les colis sont récupérés par nous ?",
    answer:
      "Dépôt en Point Relais : Le client a la possibilité de déposer ses colis dans l'un des 120 points relais, qui proposent des horaires étendus. De plus, nous mettons à disposition 40 courtiers, accessibles 7 jours sur 7, 24 heures sur 24, offrant ainsi une grande flexibilité pour le dépôt et la récupération des colis",
  },
  {
    question: "Comment sont gérés les bordereaux de livraison ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
  {
    question: "Comment se passe la gestion des retours ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
  {
    question: "comment puis-je suivre la livraison de mes colis ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
];
export const Faq = () => {
  return (
    <>
      <section className="faq bg-accent py-16 mb-12 min-h-[85vh]">
        <div className="container mx-auto">
          <Fade bottom duration={1500} delay={500} distance="60px">
            <h2 className="faq__title h2 mb-[50px] text-center text-white">
              Questions fréquemment posées
            </h2>
          </Fade>
          <div className="max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <Fade
                key={index}
                bottom
                duration={1500}
                delay={(index + 1) * 300}
                distance="100px"
              >
                <div
                  className="faq__item px-[30px] pt-4 pb-1 mb-6 cursor-pointer select-none rounded-lg bg-white"
                  key={index}
                >
                  <div className="flex items-center justify-between mb-[10px]">
                    <h4 className=" font-semibold text-[18px]">
                      {item.question}
                    </h4>

                    <div className="faq__btn text-accent">
                      <RiAddFill className="text-2xl faq__btn-icon-active" />
                      <RiSubtractFill className="text-2xl faq__btn-icon-inactive hidden" />
                    </div>
                  </div>
                  <div className="faq__answer h-0 overflow-hidden">
                    <p className="font-light">{item.answer}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Script id="toggle-faq">
        {`
          const faqItems = document.querySelectorAll(".faq__item");
          faqItems.forEach((item) => {
            const faqBtn = item.querySelector(".faq__btn");
            const faqAnswer = item.querySelector(".faq__answer");
            item.addEventListener("click", () => {
              const isOpen = item.classList.toggle("open");
              
              const iconActiveElement = faqBtn.querySelector(".faq__btn-icon-active");
              const iconInactiveElement = faqBtn.querySelector(".faq__btn-icon-inactive");
              if(isOpen){
                iconActiveElement.classList.add("hidden");
                iconInactiveElement.classList.remove("hidden");
              }else{
                iconActiveElement.classList.remove("hidden");
                iconInactiveElement.classList.add("hidden");
              }
            });
          });
        `}
      </Script>
    </>
  );
};

export default Faq;

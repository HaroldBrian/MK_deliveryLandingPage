/* eslint-disable react/no-unescaped-entities */
import { RiAddFill, RiSubtractFill } from "@remixicon/react";
import Script from "next/script";

const faqItems = [
  {
    question: "Why to believe in Insove medical healthcare ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
  {
    question: "Why to believe in Insove medical healthcare ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
  {
    question: "Why to believe in Insove medical healthcare ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
  {
    question: "Why to believe in Insove medical healthcare ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae, et earum velit provident aliquam reprehenderit quos similique a voluptas quasi nemo ipsum omnis aperiam nostrum libero quisquam aspernatur deserunt!",
  },
];
export const Faq = () => {
  return (
    <>
      <section className="faq">
        <div className="container mx-auto">
          <h2 className="faq__title h2 mb-[50px] text-center">
            We're got answers
          </h2>
          <div className="max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
                key={index}
              >
                <div className="flex items-center justify-between mb-[10px]">
                  <h4 className="h4">{item.question}</h4>

                  <div className="faq__btn text-accent">
                    <RiAddFill className="text-2xl faq__btn-icon-active" />
                    <RiSubtractFill className="text-2xl faq__btn-icon-inactive hidden" />
                  </div>
                </div>
                <div className="faq__answer h-0 overflow-hidden">
                  <p className="font-light">{item.answer}</p>
                </div>
              </div>
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

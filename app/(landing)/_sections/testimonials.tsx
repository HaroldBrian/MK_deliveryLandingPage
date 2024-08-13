import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Fade from "react-reveal/Fade";

const testimonialItems = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipi sicinelit. Repudiandae unde vero, fugit quaerat voluptates doloremque aliquam corporis modi totam numquam nemoperferendis adipisci neque a aut qui, alias teneturcum.",
    author: "Harold Brian",
    type: "Customer",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipi sicinelit. Repudiandae unde vero, fugit quaerat voluptates doloremque aliquam corporis modi totam numquam nemoperferendis adipisci neque a aut qui, alias teneturcum.",
    author: "Harold Brian",
    type: "Customer",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipi sicinelit. Repudiandae unde vero, fugit quaerat voluptates doloremque aliquam corporis modi totam numquam nemoperferendis adipisci neque a aut qui, alias teneturcum.",
    author: "Harold Brian",
    type: "Customer",
  },
];
export const Testimonials = () => {
  return (
    <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 lg:min-h-[595px] lg:py-0">
      <Fade bottom duration={2000} delay={600} distance="60px">
        <div className="testimonial__container container mx-auto">
          <Fade bottom duration={2000} delay={900} distance="60px">
            <div className="flex flex-col lg:flex-row items-center gap-x-14">
              <TestimonialBackground />
              <TestimonialItems />
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
};

const TestimonialBackground = () => {
  return (
    <div className="hidden lg:flex">
      <Image
        src={"/assets/img/testimonials/img.png"}
        width={500}
        height={500}
        alt="testimonials"
      />
    </div>
  );
};

const TestimonialItems = () => {
  return (
    <div className="max-w-[98%] lg:max-w-[710px]">
      <Swiper
        // className="h-[400px]"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonialItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col justify-center items-start mx-14">
              <div className="max-w-[680px] mx-auto text-center lg:text-left">
                <p
                  className="font-light relative text-[20px] text-primary leading-[170%] text-center lg:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-6 before:h-6 before:bg-no-repeat
          after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-6 after:h-6 after:bg-no-repeat mb-7"
                >
                  <span className="mx-2">{item.testimonial}</span>
                </p>
                <div className="text-[24px] text-primary font-semibold">
                  {item.author}
                </div>
                <div className="text-greyAccent font-medium uppercase tracking-[2.24px]">
                  {item.type}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

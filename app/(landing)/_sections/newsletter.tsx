/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Fade from "react-reveal/Fade";

export const Newsletter = () => {
  return (
    <section className="newsletter bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden">
      <Fade bottom duration={3000} delay={600} distance="60px">
        <div className="absolute left-0 bottom-0">
          <Image
            src="/assets/img/newsletter/pattern.svg"
            alt="newsletter"
            width={1000}
            height={1000}
          />
        </div>

        <div className="newsletter__container container mx-auto">
          <Fade bottom duration={3000} delay={900} distance="60px">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
              <div className="flex-1 z-10 text-center md:text-left">
                <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
                  Our newsletter
                </div>
                <h1 className="h1 mb-4 text-white">
                  Subscribe to get more updates
                </h1>
              </div>

              <form className="flex-1">
                <div className="flex flex-col md:flex-row relative gap-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-full w-full h-[65px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"
                  />
                  <button className="btn btn-lg btn-white md:absolute right-0">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
};

export default Newsletter;

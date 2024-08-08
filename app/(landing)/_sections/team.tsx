import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiYoutubeFill,
} from "@remixicon/react";

const teamsItems = [
  {
    teams: [
      {
        img: "/assets/img/team/doctor-1.png",
        name: "Dr. Harold Brian",
        function: "Developer manager",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        img: "/assets/img/team/doctor-2.png",
        name: "Dr. Harold Brian",
        function: "Software Engineer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  {
    teams: [
      {
        img: "/assets/img/team/doctor-1.png",
        name: "Dr. Harold Brian",
        function: "Creative Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        img: "/assets/img/team/doctor-2.png",
        name: "Dr. Harold Brian",
        function: "Web Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
];
export const Team = () => {
  return (
    <section className="team section">
      <div className="container mx-auto">
        <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
          Our Team
        </h2>

        <TeamItems />
      </div>
    </section>
  );
};

const TeamBackground = () => {
  return (
    <div className="hidden xl:flex">
      <Image
        src={"/assets/img/teams/img.png"}
        width={500}
        height={500}
        alt="teams"
      />
    </div>
  );
};

const TeamItems = () => {
  return (
    <div className="team__slider min-h-[400px]">
      <Swiper
        className=""
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
        {teamsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row gap-9">
              {item.teams.map((team, index) => (
                <div className="flex-1 flex flex-col xl:flex-row" key={index}>
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    <div className="flex-1">
                      <Image
                        src={team.img}
                        width={250}
                        height={250}
                        alt="teams"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="h4 mb-[10px]">{team.name}</h4>
                      <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                        {team.function}
                      </div>
                      <p className="font-light mb-[26px] max-w-[320px]">
                        {team.description}
                      </p>
                      <div className="flex gap-x-5 items-center text-[30px] text-accent-tertiary">
                        <Link
                          href={"/"}
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiYoutubeFill className="w-10 h-10" />
                        </Link>
                        <Link
                          href={"/"}
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiFacebookCircleFill className="w-10 h-10" />
                        </Link>
                        <Link
                          href={"/"}
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiInstagramFill className="w-10 h-10" />
                        </Link>
                        <Link
                          href={"/"}
                          className="cursor-pointer hover:text-accent transition-all"
                        >
                          <RiPinterestFill className="w-10 h-10" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;

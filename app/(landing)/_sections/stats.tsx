import Fade from "react-reveal/Fade";

export const Stats = () => {
  const stats = [
    { counter: "+220", label: "Happy Patients" },
    { counter: "23", label: "Points de rélais" },
    { counter: "+41", label: "Livreurs" },
    { counter: "+5", label: "Ans d'experience" },
  ];

  return (
    <section className="stats section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-6 justify-between">
          {stats.map((stat, index) => (
            <Fade
              key={index}
              top
              delay={(index + 1) * 400}
              distance="100px"
              interval={100}
              duration={1500}
            >
              <div
                className="stats__item flex-1 lg:border-r flex flex-col items-center"
                key={index}
              >
                <div className="text-4xl lg:text-[64px] font-semibold text-accent-secondary lg:mb-2">
                  {stat.counter}
                </div>
                <div>{stat.label}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

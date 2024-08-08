export const Stats = () => {
  const stats = [
    { counter: "+5120", label: "Happy Patients" },
    { counter: "26", label: "Total Branches" },
    { counter: "+53", label: "Senior Doctors" },
    { counter: "+10", label: "Years Experience" },
  ];

  return (
    <section className="stats section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
          {stats.map((stat, index) => (
            <div
              className="stats__item flex-1 xl:border-r flex flex-col items-center"
              key={index}
            >
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                {stat.counter}
              </div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

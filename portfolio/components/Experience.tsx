const workExperiences = [
  {
    company: "AA trans dba HBM Express inc",
    role: "Weekend Dispatch & Disaptch Assistant",
    period: "2024 - 2025",
    description: [
      "Coordinated driver schedules and assigned and booked loads efficiently each weekend.",
      "Assisted in organizing shipments and resolving dispatch-related issues.",
      "Supported dispatch team with daily operations and customer communication",
    ],
  },
  {
    company: "Emko inc",
    role: "Track and Trace",
    period: "2024",
    description: [
      "Monitored shipments and tracked deliveries to ensure timely arrivals.",
      "Communicated with carriers to resolve transportation issues quickly.",
      "Maintained accurate records of shipments and customer updates.",
    ],
  },
];

const hackatonsExperiences = [
  {
    company: "Brainster",
    role: "Full Stack Development",
    period: "2024 - 2024",
    description: [
      "Created BreatheMK platform during hackathon, enhancing user experience and functionality.",
      "Led team developing e-commerce backend, managing APIs and database.",
      "Directed backend development for Marinov Design, ensuring smooth platform operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="h-px w-12 bg-mango"></span>
          <span className="text-mango font-medium tracking-wider">
            EXPERIENCE
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Hackathon Expiriences
        </h2>

        <div className="space-y-2 mb-6">
          {hackatonsExperiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l border-white/10 hover:border-mango transition-colors duration-300"
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-mango"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  {exp.role} <span className="text-mango">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm leading-relaxed flex items-start"
                  >
                    <span className="mr-2 text-mango">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Where I've Worked
        </h2>

        <div className="space-y-12">
          {workExperiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l border-white/10 hover:border-mango transition-colors duration-300"
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-mango"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  {exp.role} <span className="text-mango">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm leading-relaxed flex items-start"
                  >
                    <span className="mr-2 text-mango">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

const experiences = [
    {
        company: "Tech Corp Inc.",
        role: "Senior Full Stack Developer",
        period: "2021 - Present",
        description: [
            "Led the migration of a legacy monolith to a microservices architecture using Node.js and Kubernetes.",
            "Improved application performance by 40% through code optimization and caching strategies.",
            "Mentored junior developers and established code quality standards."
        ]
    },
    {
        company: "Creative Agency",
        role: "Frontend Developer",
        period: "2019 - 2021",
        description: [
            "Developed responsive websites for high-profile clients using React and Gatsby.",
            "Collaborated with designers to implement pixel-perfect UIs and smooth animations.",
            "Implemented accessibility best practices, achieving WCAG 2.1 AA compliance."
        ]
    },
    {
        company: "StartUp Land",
        role: "Junior Developer",
        period: "2018 - 2019",
        description: [
            "Built and maintained features for the core product using Vue.js and Laravel.",
            "Participated in daily stand-ups and agile development processes.",
            "Assisted in database design and API development."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-12">
                    <span className="h-px w-12 bg-accent"></span>
                    <span className="text-accent font-medium tracking-wider">EXPERIENCE</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    Where I've Worked
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l border-white/10 hover:border-accent transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-accent"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">
                                    {exp.role} <span className="text-accent">@ {exp.company}</span>
                                </h3>
                                <span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                                        <span className="mr-2 text-accent">▹</span>
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

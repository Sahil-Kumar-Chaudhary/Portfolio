const projectData = [
  {
    title: "Password Strength Checker",
    description:
      "Web tool that checks password strength using length, numbers, and special characters and provides instant feedback.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Loan AI - Smart Loan Calculator",
    description:
      "Web app that calculates EMI and loan repayment with financial insights.",
    tech: ["Next.js", "React", "API"],
  },
  {
    title: "Smart Dustbin",
    description:
      "Touchless dustbin using ultrasonic sensor and servo motor for automatic lid opening.",
    tech: ["Arduino Uno", "C++", "Ultrasonic Sensor", "Servo Motor"],
  },
];

const WorkSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectData.map((project, i) => (
        <div
          key={i}
          className="bg-[rgba(65,47,123,0.15)] rounded-lg p-6 flex flex-col gap-4 group hover:bg-[rgba(89,65,169,0.15)] hover:scale-[1.03] transition-all duration-300"
        >
          <div className="text-4xl text-accent mb-2 font-bold opacity-20">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm leading-relaxed text-white/60">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
            {project.tech.map((t, j) => (
              <span
                key={j}
                className="px-2 py-1 bg-accent/10 rounded text-xs text-accent border border-accent/20 group-hover:bg-accent/20 transition-all duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSlider;

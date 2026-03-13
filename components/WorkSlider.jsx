const projectData = [
  {
    title: "Password Strength Checker",
    description:
      "Web tool that checks password strength using length, numbers, and special characters and provides instant feedback.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/passwordstrength.png",
    liveLink: "https://password-strength-checker-wheat.vercel.app/",
    githubLink:
      "https://github.com/Sahil-Kumar-Chaudhary/Password_Strength_Checker",
  },
  {
    title: "Loan AI - Smart Loan Calculator",
    description:
      "Web app that calculates EMI and loan repayment with financial insights.",
    tech: ["Next.js", "React", "API"],
    image: "/ailoan.png",
    liveLink: "https://loan-repayment-or8ibwrwe-sahil-kumar-chaudharys-projects.vercel.app/",
    githubLink: "https://github.com/Sahil-Kumar-Chaudhary/loan-repayment",
  },
  {
    title: "Smart Dustbin",
    description:
      "Touchless dustbin using ultrasonic sensor and servo motor for automatic lid opening.",
    tech: ["Arduino Uno", "C++", "Ultrasonic Sensor", "Servo Motor"],
    liveLink: "#",
    githubLink: "#",
  },
];

const WorkSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projectData.map((project, i) => (
        <div
          key={i}
          className="bg-[rgba(65,47,123,0.15)] rounded-lg p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 group hover:bg-[rgba(89,65,169,0.15)] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300"
        >
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-[180px] object-cover rounded-md border border-white/10"
            />
          )}
          <div className="text-4xl text-accent mb-2 font-bold opacity-20">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm leading-relaxed text-white/60">
            {project.description}
          </p>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3 py-1.5 rounded-md text-sm border border-accent/40 text-accent hover:bg-accent/20 transition-all duration-200"
            >
              Live Link
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3 py-1.5 rounded-md text-sm border border-white/30 text-white/80 hover:border-accent hover:text-accent transition-all duration-200"
            >
              GitHub
            </a>
          </div>
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

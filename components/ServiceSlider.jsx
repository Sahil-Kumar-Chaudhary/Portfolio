const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "C", "Java", "Python", "HTML", "CSS"],
  },
  {
    title: "Cybersecurity & Networking",
    skills: ["Metasploit", "Burp Suite", "Nmap", "Wireshark"],
  },
  {
    title: "Frameworks & Technologies",
    skills: ["Flask", "Bootstrap", "Next.js", "React"],
  },
  {
    title: "Platforms & Systems",
    skills: [
      "Linux",
      "Parrot OS",
      "Windows",
      "VMware Workstation",
      "TryHackMe",
      "Hack The Box",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Creativity",
      "Problem-Solving",
      "Curiosity",
      "Teamwork",
      "Adaptability",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Postman", "npm", "Vercel"],
  },
];

const ServiceSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skillCategories.map((category, i) => (
        <div
          key={i}
          className="bg-[rgba(65,47,123,0.15)] rounded-lg px-4 sm:px-6 py-6 sm:py-8 hover:bg-[rgba(89,65,169,0.15)] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300"
        >
          <h3 className="text-lg text-accent mb-4 font-semibold">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, j) => (
              <span
                key={j}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10 hover:bg-accent/20 hover:border-accent/30 hover:text-white transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;

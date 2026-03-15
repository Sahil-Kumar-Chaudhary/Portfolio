import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { HiEnvelope } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { FaAward } from "react-icons/fa";

import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";
import ServiceSlider from "../components/ServiceSlider";
import WorkSlider from "../components/WorkSlider";
import ParticlesContainer from "../components/ParticlesContainer";
import AnimatedBackground from "../components/AnimatedBackground";

import { fadeIn } from "../variants";

/* ── scroll-triggered section wrapper ── */
const Section = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

/* ── certificate data ── */
const certificateData = [
  { title: "Introduction to Cybersecurity", issuer: "Cisco", verifyLink: "https://drive.google.com/file/d/1VVcLp8OSqA5vKTzeRNeEYh0J9xDFX1Rp/view?usp=sharing"},
  { title: "Learn Wireshark Like a Pro", issuer: "Udemy", verifyLink: "https://drive.google.com/file/d/1_bxMEgcVMKvM6N_okmYL7LXKPN3mUU8E/view?usp=drive_link" },
  { title: "C++ Programming, OOPs and DSA", issuer: "CSE Pathshala", verifyLink: "https://drive.google.com/file/d/1BSFum_qkK5UaXrDUJB2tCR73ug-4TPnM/view?usp=sharing" },
  { title: "Cyber Job Simulation", issuer: "Deloitte", verifyLink: "https://drive.google.com/file/d/1u-rREV_seR3kE507-VF2ggjccfD7uqyT/view?usp=drive_link"},
  { title: "Bits and Bytes of Computer Networking", issuer: "Coursera", verifyLink: "https://drive.google.com/file/d/1oqxvF5iSPyY6er92h98vtoznsBY5ULCv/view?usp=sharing" },
  { title: "TCP/IP Advanced Topics", issuer: "Coursera", verifyLink: "https://drive.google.com/file/d/1KRPcWvxlc1kcg9L27SRYsLX1yk6feGRR/view?usp=sharing"},
  { title: "Fundamentals of Network Communication", issuer: "Coursera", verifyLink: "https://drive.google.com/file/d/1Tp_znOQ91pLu8AYxgujTeExMalx8Ym1S/view?usp=sharing"},
  { title: "Responsive Web Design",issuer: "freeCodeCamp", verifyLink: "https://drive.google.com/file/d/1wayRo5-JO4KKsXF0w2sMPzCjNnvA7OkM/view?usp=sharing"},

];

/* ── education data ── */
const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    score: "CGPA: 7.34",
    duration: "Aug 2023 — Present",
  },
  {
    degree: "Intermediate",
    institution: "C.S.D.A.V Public School",
    location: "Motihari, Bihar",
    score: "Percentage: 76.8%",
    duration: "Apr 2021 — Mar 2023",
  },
  {
    degree: "Matriculation",
    institution: "C.S.D.A.V Public School",
    location: "Motihari, Bihar",
    score: "Percentage: 78.4%",
    duration: "Apr 2020 — Mar 2021",
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const scrollToContact = (event) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("https://formsubmit.co/ajax/sahilku707@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Thank you! I will get back to you ASAP.");
          myForm.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("Failed to send. Please email me directly at sahilku707@gmail.com"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section id="home" className="h-screen relative bg-primary/60 overflow-hidden">
        {/* animated background */}
        <ParticlesContainer />
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10 pointer-events-none">
          <div className="text-center flex flex-col justify-center px-4 sm:px-6 xl:pt-40 xl:text-left h-full container mx-auto pointer-events-auto">
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[4px] text-white/60 mb-4"
            >
            
            </motion.p>

            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              className="h1"
            >
              Hi, I&apos;m <br />
              <span className="text-accent">Sahil Kumar</span> Chaudhary
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              Computer Science student passionate about cybersecurity,
              networking, and building secure web applications.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center xl:justify-start items-center"
            >
              <a
                href="https://github.com/Sahil-Kumar-Chaudhary"
                target="_blank"
                rel="noreferrer noopener"
                className="btn rounded-full border border-white/50 px-4 sm:px-6 flex items-center gap-2 hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <RiGithubLine /> GitHub
              </a>

              
              <a
                href="https://www.linkedin.com/in/sahil-kumar-chaudhary"
                target="_blank"
                rel="noreferrer noopener"
                className="btn rounded-full border border-white/50 px-4 sm:px-6 flex items-center gap-2 hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <RiLinkedinLine /> LinkedIn
              </a>
              <button
                type="button"
                onClick={scrollToContact}
                className="btn rounded-full bg-accent border border-accent px-4 sm:px-6 flex items-center gap-2 hover:bg-accent/80 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <HiEnvelope /> Contact
              </button>
            </motion.div>
          </div>
        </div>

        {/* bg decoration + avatar */}
        <div className="w-full max-w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <Section id="about" className="min-h-screen bg-primary/30 pt-24 pb-16">
        <AnimatedBackground id="bg-about" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center xl:text-left">
          <div className="flex flex-col xl:flex-row gap-x-6 gap-y-8 items-center">
            {/* IMAGE */}
      <div className="flex-1 flex justify-center perspective-[1000px]">
        <img
          src="/image3.png"
          alt="Sahil Kumar Chaudhary"
          className="rounded-2xl w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] object-cover transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-[0_20px_50px_rgba(230,142,46,0.2)] border-2 border-transparent hover:border-accent/30 bg-white/5"
        />
      </div>
            <div className="flex-1 flex flex-col justify-center">

              <h2 className="h2">
                About <span className="text-accent">Me</span>
              </h2>
               <h2 className="text-2xl font-bold mb-6">
          Who Am I
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
        I am Sahil Kumar Chaudhary a computer science student at lovely professional university. I am interested in cybersecurity networking and secure software development. I enjoy learning how systems work and how they can be protected from cyber threats.        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
        My journey with programming languages like c++ and python. Later i developed a strong interest in cybersecurity and began exploring network security ethical hacking and penetration testing.        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
        I regularly practice on platforms like tryhackme and hack the box and work on development projects to improve my technical and problem solving skills. My goal is to build secure systems and help protect digital infrastructure.        </p>


        {/* DOWNLOAD BUTTON */}
        <a
  href="/Sahil_Cv.pdf"
  download="Sahil_Kumar_Chaudhary_CV.pdf"
  className="w-fit bg-accent px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white font-semibold hover:opacity-90 transition text-sm sm:text-base"
>
  Download CV
</a>

            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════ SKILLS ═══════════ */}
      <Section id="skills" className="min-h-screen bg-primary/30 pt-24 pb-16 overflow-hidden">
        <AnimatedBackground id="bg-skills" />
        <Circles />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="flex flex-col">
            <div className="text-center flex flex-col items-center">
              <h2 className="h2">
                Skills <span className="text-accent"></span>
              </h2>
              <p className="mb-4 max-w-[700px] mx-auto">
                Tools, technologies, and platforms I work with across
                development and cybersecurity.
                </p>
                
                <p className="max-w-[700px] mx-auto">

              </p>
            </div>
            <div className="w-full max-w-[1000px] mx-auto mt-10 sm:mt-12">
              <ServiceSlider />
            </div>
          </div>
        </div>
        <Bulb />
      </Section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <Section id="projects" className="min-h-screen bg-primary/30 pt-24 pb-16 overflow-hidden">
        <AnimatedBackground id="bg-projects" />
        <Circles />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="flex flex-col">
            <div className="text-center flex flex-col items-center">
              <h2 className="h2">
              Projects <span className="text-accent"></span>
              </h2>
              <p className="mb-4 max-w-[700px] mx-auto">
                A selection of projects I have built, spanning web development
                and hardware prototyping.
              </p>
            </div>
            <div className="w-full max-w-[1200px] mx-auto mt-10 sm:mt-12">
              <WorkSlider />
            </div>
          </div>
        </div>
        <Bulb />
      </Section>

      {/* ═══════════ CERTIFICATES ═══════════ */}
      <Section id="certificates" className="min-h-screen bg-primary/30 pt-24 pb-16">
        <AnimatedBackground id="bg-certificates" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 mb-8">
          <span className="text-accent">Certificates</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-[800px] mx-auto mt-8">
            {certificateData.map((cert, i) => (
              <div
                key={i}
                className="bg-[rgba(65,47,123,0.15)] rounded-lg p-3 sm:p-4 flex items-start gap-3 sm:gap-4 hover:bg-[rgba(89,65,169,0.15)] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 text-left"
              >
                <FaAward className="text-accent text-xl mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-medium">{cert.title}</div>
                  {cert.issuer && (
                    <div className="text-sm text-white/40">{cert.issuer}</div>
                  )}
                </div>
                {cert.verifyLink && (
                  <Link
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-shrink-0 mt-1 text-xs font-semibold px-3 py-1 rounded-full border border-accent/60 text-accent hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    Verify ↗
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ EDUCATION ═══════════ */}
      <Section id="education" className="min-h-[50vh] bg-primary/30 pt-24 pb-16">
        <AnimatedBackground id="bg-education" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 mb-8">
            <span className="text-accent">Education</span>
          </h2>
          <div className="flex flex-col gap-6 max-w-[700px] mx-auto">
            {educationData.map((edu, i) => (
              <div
                key={i}
                className="bg-[rgba(65,47,123,0.15)] rounded-lg p-5 sm:p-8 text-left hover:bg-[rgba(89,65,169,0.15)] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300"
              >
                <h3 className="text-base sm:text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-white/60 mb-1">{edu.institution}</p>
                <p className="text-white/40 text-sm mb-2">{edu.location}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-accent font-semibold">{edu.score}</span>
                  <span className="text-white/40 text-sm">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ CONTACT ═══════════ */}
      <Section id="contact" className="min-h-screen bg-primary/30 pt-24 pb-16">
        <AnimatedBackground id="bg-contact" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1040px] rounded-[28px] border border-white/10 bg-black/20 px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-8 sm:py-10 lg:px-12">
            <div className="text-center mb-10">
              <h2 className="text-[30px] sm:text-[38px] font-semibold text-white mb-3">
                Contact <span className="text-accent">me</span>
              </h2>
              
            </div>

            <form
              className="w-full"
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input bg-white/[0.04]"
                  disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input bg-white/[0.04]"
                  disabled={isLoading}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input bg-white/[0.04]"
                  disabled={isLoading}
                />
                <div className="relative">
                  <select
                    name="service"
                    className="input appearance-none bg-white/[0.04] pr-12 text-white/70"
                    defaultValue=""
                    disabled={isLoading}
                    required
                  >
                    <option
                      value=""
                      disabled
                      style={{ color: "#64748b", backgroundColor: "#ffffff" }}
                    >
                      Service Of Interest
                    </option>
                    <option
                      value="Web Development"
                      style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                    >
                      Web Development
                    </option>
                    <option
                      value="Cybersecurity"
                      style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                    >
                      Cybersecurity
                    </option>
                    <option
                      value="Networking"
                      style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                    >
                      Networking
                    </option>
                    <option
                      value="Collaboration"
                      style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                    >
                      Collaboration
                    </option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/40">
                    ▾
                  </span>
                </div>
                <textarea
                  name="message"
                  placeholder="Project details..."
                  className="textarea h-[150px] bg-white/[0.04] min-h-[150px] md:col-span-2"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="btn min-w-[140px] rounded-xl border border-white/40 bg-white/5 px-8 text-white transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent/10 group"
                  disabled={isLoading}
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    {isLoading ? "Sending..." : "Send"}
                  </span>
                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                    aria-hidden
                  />
                </button>
              </div>
            </form>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="flex items-center gap-3 sm:gap-4">
                  <a
                    href="https://github.com/Sahil-Kumar-Chaudhary"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <RiGithubLine className="text-xl" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sahil-kumar-chaudhary"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <RiLinkedinLine className="text-xl" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <Link
                    href="mailto:sahilku707@gmail.com"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <RiMailLine className="text-xl" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 text-sm text-white/60 sm:flex-row sm:flex-wrap sm:gap-8">
                  <Link
                    href="mailto:sahilku707@gmail.com"
                    className="flex items-center gap-2 transition-all duration-300 hover:text-accent"
                  >
                    <RiMailLine className="text-base text-accent" />
                    sahilku707@gmail.com
                  </Link>
                  <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />
                  <div className="flex items-center gap-2 text-white/50">
                    <RiPhoneLine className="text-base text-accent" />
                    +91 7070430207
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

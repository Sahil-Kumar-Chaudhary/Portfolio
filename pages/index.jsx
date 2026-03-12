import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";
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
  { title: "Introduction to Cybersecurity", issuer: "Cisco" },
  { title: "Learn Wireshark Like a Pro", issuer: "Udemy" },
  { title: "C++ Programming, OOPs and DSA", issuer: "" },
  { title: "Cyber Job Simulation", issuer: "Deloitte" },
  { title: "Bits and Bytes of Computer Networking", issuer: "Coursera" },
  { title: "TCP/IP Advanced Topics", issuer: "Coursera" },
  { title: "Fundamentals of Network Communication", issuer: "Coursera" },
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section id="home" className="h-screen relative bg-primary/60 overflow-hidden">
        {/* animated background */}
        <ParticlesContainer />
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center px-4 sm:px-6 xl:pt-40 xl:text-left h-full container mx-auto">
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[4px] text-white/60 mb-4"
            >
              Cybersecurity Enthusiast &amp; Developer
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
              <Link
                href="https://github.com/Sahil-Kumar-Chaudhary"
                target="_blank"
                rel="noreferrer noopener"
                className="btn rounded-full border border-white/50 px-4 sm:px-6 flex items-center gap-2 hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <RiGithubLine /> GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/sahil-kumar-chaudhary"
                target="_blank"
                rel="noreferrer noopener"
                className="btn rounded-full border border-white/50 px-4 sm:px-6 flex items-center gap-2 hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <RiLinkedinLine /> LinkedIn
              </Link>
              <Link
                href="#contact"
                className="btn rounded-full bg-accent border border-accent px-4 sm:px-6 flex items-center gap-2 hover:bg-accent/80 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <HiEnvelope /> Contact
              </Link>
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
      <div className="flex-1 flex justify-center">
        <img
          src="/image.png"
          alt="Sahil Kumar Chaudhary"
          className="rounded-lg w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] object-cover"
        />
      </div>
            <div className="flex-1 flex flex-col justify-center">

              <h2 className="h2">
                About <span className="text-accent">Me</span>.
              </h2>
               <h2 className="text-2xl font-bold mb-6">
          Who Am I
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          My name is Sahil Kumar Chaudhary and I am a Computer Science student at Lovely Professional University with a strong interest in cybersecurity, networking, and secure software development. I am passionate about understanding how systems work, discovering potential vulnerabilities, and building reliable and secure applications.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          My journey in technology began with programming where I started learning languages like C++ and Python. Over time, my curiosity expanded into the field of cybersecurity where I began exploring network security, ethical hacking, and penetration testing. I enjoy learning new security tools, analyzing networks, and understanding how digital systems can be protected from modern cyber threats.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          I regularly practice my cybersecurity skills using platforms such as TryHackMe and Hack The Box while also working on development projects that improve my technical skills and problem-solving abilities. My goal is to combine development and security knowledge to build secure systems and contribute to protecting digital infrastructures.
        </p>


        {/* DOWNLOAD BUTTON */}
        <a
          href="/cv.pdf"
          className="inline-block bg-accent px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white font-semibold hover:opacity-90 transition text-sm sm:text-base"
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
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <h2 className="h2 xl:mt-8">
                My Skills <span className="text-accent">.</span>
              </h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                Tools, technologies, and platforms I work with across
                development and cybersecurity.
                </p>
                
                <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                My expertise spans both creating innovative software and ensuring its integrity, allowing me to approach projects with a security-first mindset.

              </p>
            </div>
            <div className="w-full xl:max-w-[65%]">
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
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <h2 className="h2 xl:mt-12">
                My Projects <span className="text-accent">.</span>
              </h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                A selection of projects I have built, spanning web development
                and hardware prototyping.
              </p>
            </div>
            <div className="w-full xl:max-w-[65%]">
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
            My <span className="text-accent">Certificates</span>.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-[800px] mx-auto mt-8">
            {certificateData.map((cert, i) => (
              <div
                key={i}
                className="bg-[rgba(65,47,123,0.15)] rounded-lg p-3 sm:p-4 flex items-start gap-3 sm:gap-4 hover:bg-[rgba(89,65,169,0.15)] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 text-left"
              >
                <FaAward className="text-accent text-xl mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{cert.title}</div>
                  {cert.issuer && (
                    <div className="text-sm text-white/40">{cert.issuer}</div>
                  )}
                </div>
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
            My <span className="text-accent">Education</span>.
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex items-center justify-center">
          <div className="flex flex-col w-full max-w-[700px] text-center">
            <h2 className="h2 text-center mb-12">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>

            {/* contact links */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8">
              <Link
                href="mailto:sahilku707@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-all"
              >
                <RiMailLine className="text-accent text-lg" />
                sahilku707@gmail.com
              </Link>
              <Link
                href="https://github.com/Sahil-Kumar-Chaudhary"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-all"
              >
                <RiGithubLine className="text-accent text-lg" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/sahil-kumar-chaudhary"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-all"
              >
                <RiLinkedinLine className="text-accent text-lg" />
                LinkedIn
              </Link>
            </div>

            {/* form */}
            <form
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
              name="contact"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-6 w-full">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input"
                  disabled={isLoading}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                disabled={isLoading}
                required
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="textarea"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto"
                disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

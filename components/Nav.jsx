import { useEffect, useState } from "react";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiAcademicCap,
  HiBookOpen,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", hash: "#home", Icon: HiHome },
  { name: "about", hash: "#about", Icon: HiUser },
  { name: "skills", hash: "#skills", Icon: HiRectangleGroup },
  { name: "projects", hash: "#projects", Icon: HiViewColumns },
  { name: "certificates", hash: "#certificates", Icon: HiAcademicCap },
  { name: "education", hash: "#education", Icon: HiBookOpen },
  { name: "contact", hash: "#contact", Icon: HiEnvelope },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navData.map((item) => item.name);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-evenly xl:justify-center gap-y-10 px-2 xl:px-0 h-[64px] xl:h-max py-4 xl:py-8 bg-white/10 backdrop-blur-md text-xl xl:text-xl xl:rounded-full" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
        {navData.map((link, i) => (
          <a
            className={`${
              activeSection === link.name ? "text-accent" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.hash}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [pastExperienceSection, setPastExperienceSection] = useState(false);
  const lastScrollY = useRef(0);
  const scrollingUp = useRef(false);

  useEffect(() => {
    const checkPosition = () => {
      const currentScrollY = window.scrollY;

      // Get the Experience section position
      const experienceSection = document.getElementById("work");

      if (experienceSection) {
        // Get section position relative to the page
        const experienceSectionPosition =
          experienceSection.getBoundingClientRect();

        // Check if we're past the experience section
        // This checks if the top of the section is above the viewport
        const isPastExperience = experienceSectionPosition.top <= 0;

        // Update scrolling direction
        scrollingUp.current = currentScrollY < lastScrollY.current;

        // Update state based on section position
        if (isPastExperience) {
          setPastExperienceSection(true);

          // When past Experience section, only show navbar when scrolling up
          setIsVisible(scrollingUp.current);
        } else {
          // Before experience section, always hide navbar
          setPastExperienceSection(false);
          setIsVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Check position on scroll
    window.addEventListener("scroll", checkPosition);

    // Check position on resize too
    window.addEventListener("resize", checkPosition);

    // Initial check
    checkPosition();

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  const handleLinkClick = (Link) => {
    setActive(Link.title);
    setToggle(false);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 pointer-events-auto transition-all duration-300 ${
        !isVisible || !pastExperienceSection
          ? "opacity-0 -translate-y-full"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-karla cursor-pointer flex">
            BILL SUSANTO
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-white"
              } hover:text-white text-[15px] font-karla cursor-pointer`}
              onClick={() => {
                console.log(`Clicking on ${Link.id}`);
                setActive(Link.title);
              }}
            >
              {Link.id === "billybot" ? (
                <a
                  href="https://billybot-v1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Billybot
                </a>
              ) : Link.id === "resume" ? (
                <a
                  href="https://drive.google.com/file/d/1KMba6QcTri1FsRY_Ga7oUQrOlSrX0Qes/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              ) : (
                <a href={`#${Link.id}`}>{Link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-black" : "text-black"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    console.log(`Clicking on mobile ${Link.id}`);
                    if (Link.id === "billybot" || Link.id === "resume") {
                      handleLinkClick(Link);
                    } else {
                      setActive(Link.title);
                    }
                    setToggle(false);
                  }}
                >
                  {Link.id === "billybot" ? (
                    <a
                      href="https://billybot-v1.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Billybot
                    </a>
                  ) : Link.id === "resume" ? (
                    <a
                      href="https://drive.google.com/file/d/1KMba6QcTri1FsRY_Ga7oUQrOlSrX0Qes/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  ) : (
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

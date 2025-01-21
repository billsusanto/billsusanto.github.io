import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollPosition < currentScrollPos && currentScrollPos > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const handleLinkClick = (Link) => {
    setActive(Link.title);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-opacity-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <p className='text-white text-[18px] font-karla cursor-pointer flex'>
            BILL SUSANTO
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-white"} hover:text-white text-[15px] font-karla cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              {Link.id === "coba" ? (
                <a href="https://github.com/billsusanto/Coba" target="_blank" rel="noopener noreferrer">Coba</a>
              ) :
              Link.id === "billybot" ? (
                <a href="https://billybot-v1.vercel.app/" target="_blank" rel="noopener noreferrer">Billybot</a>
              ) :
              Link.id === "resume" ? (
                <a href="https://drive.google.com/file/d/1r96TeJ7oiOPqT4IIokR67fnhK-WQIrVZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
              ) : (
                <a href={`#${Link.id}`}>{Link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title ? "text-black" : "text-black"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    if (Link.id === "billybot" || Link.id === "resume") {
                      handleLinkClick(Link);
                    } else {
                      setActive(Link.title);
                    }
                    setToggle(false);
                  }}
                >
                  {Link.id === "billybot" ? (
                    <a href="https://billybot-v1.vercel.app/" target="_blank" rel="noopener noreferrer">Billybot</a>
                  ) :
                  Link.id === "resume" ? (
                    <a href="https://drive.google.com/file/d/1RfRfblU9LEnb7wrLCY31gCEYKdUwi0qU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
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

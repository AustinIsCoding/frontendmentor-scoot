import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (/* window.scrollY > 10 && */ isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="grid grid-cols-(--wrapper-mobile) overflow-hidden h-16 items-center md:h-24 md:grid-cols-(--wrapper-tablet-header) xl:grid-cols-(--wrapper-desktop)">
      <button
        onClick={toggleMenu}
        aria-controls="main-nav"
        aria-expanded={isMenuOpen}
        className="col-start-2 row-start-1 justify-self-start md:hidden"
      >
        <img
          src={
            isMenuOpen ? "assets/icons/close.svg" : "assets/icons/hamburger.svg"
          }
          alt="Menu Toggle"
        />
      </button>
      <Link
        to="/"
        className="col-start-2 row-start-1 justify-self-center md:justify-self-start"
      >
        <img src="assets/logo.svg" alt="Scoot Logo" />
      </Link>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 bottom-0 right-0 bg-(--c-black-overlay) z-50 h-screen" />
      )}
      <nav
        id="main-nav"
        className={`md:static md:col-start-2 md:row-start-1 md:block md:w-full md:pl-42.5 ${
          isMenuOpen
            ? "absolute top-16 left-0 bg-(--c-jet-black) pt-16 px-8 pb-6 z-100 h-[calc(100vh-4rem)] animate-(--a-fadeSlideIn)"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 text-(--c-light-grey) h-full md:flex-row md:items-center text-[18px] leading-[25px] md:text-[15px] md:gap-8 md:text-(--c-dim-grey)">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/locations">Location</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li className="mt-auto md:mt-0 md:ml-auto">
            <Link to="/" className="btn">
              Get Scootin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

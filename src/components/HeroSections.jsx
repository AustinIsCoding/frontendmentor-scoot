import React from "react";

const HeroSections = ({
  title,
  mobileBg,
  tabletBg,
  desktopBg,
  pattern = true,
}) => {
  return (
    <section
      className="col-span-3 bg-cover bg-center h-40 grid place-items-center md:h-50 md:place-items-baseline md:pl-24 md:relative xl:pl-42 hero"
      style={{ background: `url(${mobileBg})` }}
    >
      <style>
        {`
          @media (width >= 768px) {
            hero {
              background-image: url(${tabletBg});
            }
          }
          @media (width >= 1280px) {
            hero {
              background-image: url(${desktopBg});
            }
          }
        `}
      </style>
      <h1 className="text-(--c-white) md:self-center">{title}</h1>
      {pattern && (
        <img
          src="assets/patterns/white-circles.svg"
          alt=""
          className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[31px]"
        />
      )}
    </section>
  );
};

export default HeroSections;

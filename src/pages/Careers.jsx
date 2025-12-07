import Header from "../components/Header";
import Footer from "../components/Footer";

import FeaturesSectionsLG from "../components/FeaturesSectionsLG";
import ValuesSection from "../components/ValuesSection";

import { Link } from "react-router-dom";
import HeroSections from "../components/HeroSections";

const careersFeaturesLG = [
  {
    title: "Care to join our mission?",
    description:
      "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
    image: "assets/images/join-us.jpg",
    arrow: {
      src: "assets/patterns/left-downward-arrow.svg",
      position: "bottom-0 left-0 md:-left-31",
    },
    reverse: true,
  },
];

const positions = [
  {
    role: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    role: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    role: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    role: "Graphic Designer",
    location: "New York, United States",
  },
  {
    role: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    role: "UX Analyst",
    location: "London, United Kingdom",
  },
];

const Careers = () => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-(--wrapper-mobile) overflow-hidden md:grid-cols-(--wrapper-tablet) xl:grid-cols-(--wrapper-desktop)">
        {/* Hero */}
        <HeroSections
          title="Careers"
          mobileBg="assets/images/careers-location-hero-mobile.jpg"
          tabletBg="assets/images/careers-locations-hero-tablet.jpg"
          desktopBg="assets/images/careers-locations-hero-desktop.jpg"
        />
        {/* Careers Feature Large */}
        <section className="col-start-2 flex flex-col items-center text-center gap-30 mt-18 md:mt-36 xl:mt-30">
          {careersFeaturesLG.map((features, i) => (
            <FeaturesSectionsLG key={i} {...features} />
          ))}
        </section>
        {/* Careers Join Us */}
        <ValuesSection title="Why join Us?" />
        {/* Careers Positions */}
        <section className="col-start-2 flex flex-col items-center text-center gap-4 mt-36 text-(--c-dark-navy) md:mt-30 md:text-start">
          {positions.map((role) => (
            <div className="w-full bg-(--c-snow) flex flex-col items-center justify-center gap-4 px-8 h-47.5 md:flex-row md:justify-between md:px-12 md:h-32">
              <div className="flex flex-col gap-1 md:gap-2">
                <h6>{role.role}</h6>
                <p>{role.location}</p>
              </div>
              <Link className="btn w-full md:max-w-[180px]">Apply</Link>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import LocationTag from "../components/LocationTag";
import HeroSections from "../components/HeroSections";

const Locations = () => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-(--wrapper-mobile) overflow-hidden md:grid-cols-(--wrapper-tablet-location) xl:grid-cols-(--wrapper-desktop)">
        {/* Hero */}
        <HeroSections
          title="Locations"
          mobileBg="assets/images/careers-location-hero-mobile.jpg"
          tabletBg="assets/images/careers-locations-hero-tablet.jpg"
          desktopBg="assets/images/about-hero-desktop.jpg"
        />
        {/* Map */}
        <section className="col-start-2 flex flex-col items-center text-center gap-10 mt-18 md:mt-36 xl:mt-30">
          <picture className="relative">
            <source
              media="(min-width: 1440px)"
              srcSet="assets/images/world-map-desktop.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="assets/images/world-map-tablet.png"
            />
            <img
              src="assets/images/world-map-mobile.png"
              alt="World Map"
              className="w-full h-auto"
            />
            <LocationTag
              location="New York"
              className="top-11 left-24 xl:top-16 xl:left-36"
            />
            <LocationTag
              location="London"
              className="top-[18px] left-[245px] xl:top-3 xl:left-[390px]"
            />
            <LocationTag
              location="Yokohama"
              className="top-14 right-9 xl:top-[74px] xl:right-16"
            />
            <LocationTag
              location="Jakarta"
              className="top-[163px] right-[88px] xl:top-[245px] xl:right-[140px]"
            />
          </picture>
          <div className="flex flex-col items-center gap-4 text-(--c-dark-navy) w-full md:hidden">
            <div className="grid place-items-center bg-(--c-light-yellow) h-18 w-full">
              <h4>New York</h4>
            </div>
            <div className="grid place-items-center bg-(--c-light-yellow) h-18 w-full">
              <h4>London</h4>
            </div>
            <div className="grid place-items-center bg-(--c-light-yellow) h-18 w-full">
              <h4>Jakarta</h4>
            </div>
            <div className="grid place-items-center bg-(--c-light-yellow) h-18 w-full">
              <h4>Yokohama</h4>
            </div>
          </div>
        </section>
        {/* Message Us */}
        <section className="col-start-2 flex flex-col items-center text-center gap-8 mt-18 md:max-w-[574px] md:justify-self-center md:mt-16 md:gap-10 xl:mt-30 xl:flex-row xl:max-w-none xl:text-start xl:gap-7.5">
          <h2 className="text-(--c-dark-navy) xl:max-w-[350px]">
            Your City Not Listed?
          </h2>
          <p className="text-(--c-dim-grey) xl:max-w-[445px]">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <Link to="" className="btn">
            Message Us
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;

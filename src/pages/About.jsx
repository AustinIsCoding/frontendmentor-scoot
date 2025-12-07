import Header from "../components/Header";
import Footer from "../components/Footer";
import ValuesSection from "../components/ValuesSection";
import FeaturesSectionsLG from "../components/FeaturesSectionsLG";
import HeroSections from "../components/HeroSections";

const aboutFeaturesLG = [
  {
    title: "Mobility for the digital era",
    description:
      "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
    image: "assets/images/digital-era.jpg",
    arrow: {
      src: "assets/patterns/left-upward-arrow.svg",
      position: "-left-2 bottom-9 md:-left-31",
    },
    reverse: true,
  },
  {
    title: "Better urban living",
    description:
      "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
    image: "assets/images/better-living.jpg",
    arrow: {
      src: "assets/patterns/right-arrow.svg",
      position: "top-0 right-0 md:right-65",
    },
    reverse: false,
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-(--wrapper-mobile) overflow-hidden md:grid-cols-(--wrapper-tablet) xl:grid-cols-(--wrapper-desktop)">
        {/* Hero */}
        <HeroSections
          title="About"
          mobileBg="assets/images/about-hero-mobile.jpg"
          tabletBg="assets/images/about-hero-tablet.jpg"
          desktopBg="assets/images/about-hero-desktop.jpg"
        />
        {/* About Feature Large */}
        <section className="col-start-2 flex flex-col gap-30 mt-18 md:mt-36 xl:mt-30">
          {aboutFeaturesLG.map((features, i) => (
            <FeaturesSectionsLG key={i} {...features} />
          ))}
        </section>
        {/* About Values */}
        <ValuesSection title="Our Values" />
        {/* About FAQs */}
        <section className="col-start-2 flex flex-col items-center text-center gap-16 mt-36 text-(--c-dark-navy) md:mt-30 xl:text-start">
          <h2>FAQs</h2>
          <div className="flex flex-col gap-8 w-full xl:grid xl:grid-cols-[1fr_2fr] xl:gap-7.5">
            <h5>How it works</h5>
            <div className="flex flex-col gap-4 text-start md:gap-6 xl:gap-4 faq_hover">
              <div className="px-8 py-8 bg-(--c-snow) flex flex-col gap-6 xl:px-10">
                <div className="flex items-center justify-between gap-4">
                  <h6>How do I download the app?</h6>
                  <img
                    src="assets/icons/chevron.svg"
                    alt=""
                    className="w-4 h-auto rotate-180"
                  />
                </div>
                <p>
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </p>
              </div>
              <div className="px-8 py-8 bg-(--c-snow) flex items-center justify-between gap-4 xl:px-10">
                <h6>Can I find a nearby Scoots?</h6>
                <img
                  src="assets/icons/chevron.svg"
                  alt=""
                  className="w-4 h-auto"
                />
              </div>
              <div className="px-8 py-8 bg-(--c-snow) flex items-center justify-between gap-4 xl:px-10">
                <h6>Do I need a license to ride?</h6>
                <img
                  src="assets/icons/chevron.svg"
                  alt=""
                  className="w-4 h-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full xl:grid xl:grid-cols-[1fr_2fr] xl:gap-7.5">
            <h5>Safe driving</h5>
            <div className="flex flex-col gap-4 text-start md:gap-6 xl:gap-4 faq_hover">
              <div className="px-8 py-8 bg-(--c-snow) flex flex-col gap-6 xl:px-10">
                <div className="flex items-center justify-between gap-4">
                  <h6>Should I wear a helmet?</h6>
                  <img
                    src="assets/icons/chevron.svg"
                    alt=""
                    className="w-4 h-auto rotate-180"
                  />
                </div>
                <p>
                  Yes, please do! All cities have different laws. But we
                  strongly strongly strongly recommend always wearing a helmet
                  regardless of the local laws. We like you and we want you to
                  be as safe as possible while Scooting.
                </p>
              </div>
              <div className="px-8 py-8 bg-(--c-snow) flex items-center justify-between gap-4 xl:px-10">
                <h6>How about the rules & regulations?</h6>
                <img
                  src="assets/icons/chevron.svg"
                  alt=""
                  className="w-4 h-auto"
                />
              </div>
              <div className="px-8 py-8 bg-(--c-snow) flex items-center justify-between gap-4 xl:px-10">
                <h6>What if I damage my Scoot?</h6>
                <img
                  src="assets/icons/chevron.svg"
                  alt=""
                  className="w-4 h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

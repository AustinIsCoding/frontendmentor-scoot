import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesSectionsLG from "../components/FeaturesSectionsLG";

import { Link } from "react-router-dom";

const homeFeaturesLG = [
  {
    title: "Easy to use riding telemetry",
    description:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    image: "assets/images/telemetry.jpg",
    arrow: {
      src: "assets/patterns/left-downward-arrow.svg",
      position: "bottom-0 left-0 md:-left-31",
    },
    reverse: true,
  },
  {
    title: "Coming to a city near you",
    description:
      "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    image: "assets/images/near-you.jpg",
    arrow: {
      src: "assets/patterns/right-arrow.svg",
      position: "top-0 right-20 md:right-65",
    },
    reverse: false,
  },
  {
    title: "Zero hassle payments",
    description:
      "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
    image: "assets/images/payments.jpg",
    arrow: {
      src: "assets/patterns/left-downward-arrow.svg",
      position: "top-0 left-2/5 md:top-[85px] md:left-4/7",
    },
    reverse: true,
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-(--wrapper-mobile) overflow-hidden md:grid-cols-(--wrapper-tablet) xl:grid-cols-(--wrapper-desktop)">
        {/* Hero */}
        <section className="col-span-3 bg-[url(/assets/images/home-hero-mobile.jpg)] bg-cover bg-center h-162.5 grid grid-cols-[inherit] relative md:bg-[url(/assets/images/home-hero-tablet.jpg)] xl:bg-[url(/assets/images/home-hero-desktop.jpg)]">
          <div className="col-start-2 flex flex-col gap-6 items-center text-center mt-29 text-(--c-white) xl:items-start xl:text-start xl:max-w-[500px] xl:mt-38 xl:gap-10">
            <h1>Scooter sharing made simple</h1>
            <p className="xl:ml-[95px]">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <Link to="" className="btn mt-2.5 md:mt-2 xl:ml-[95px] xl:mt-0">
              Get Scootin
            </Link>
          </div>
          <img
            src="assets/patterns/right-arrow.svg"
            alt=""
            className="absolute bottom-11 -left-61.5 md:-left-30 xl:bottom-[24%] xl:left-1/2"
          />
          <img
            src="assets/patterns/line.svg"
            alt=""
            className="hidden xl:block absolute top-[53%]"
          />
          <img
            src="assets/patterns/white-circles.svg"
            alt=""
            className="hidden xl:block absolute bottom-[26%] -right-11"
          />
        </section>
        {/* Hero Feature Small */}
        <section className="col-start-2 flex flex-col items-center text-center gap-12 mt-30 md:grid grid-rows-[repeat(3,8.125rem)] md:gap-10 md:text-start xl:grid-rows-none xl:grid-cols-3 xl:gap-7.5">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-20 md:items-start xl:flex-col xl:gap-10">
            <img
              src="assets/icons/locate.svg"
              alt=""
              className="h-14 w-auto md:h-24"
            />
            <div className="md:flex flex-col gap-7">
              <h4 className="text-(--c-dark-navy)">Locate with app</h4>
              <p className="text-(--c-dim-grey)">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-20 md:items-start xl:flex-col xl:gap-10">
            <img
              src="assets/icons/scooter.svg"
              alt=""
              className="h-14 w-auto md:h-24"
            />
            <div className="md:flex flex-col gap-7">
              <h4 className="text-(--c-dark-navy)">Pick your scooter</h4>
              <p className="text-(--c-dim-grey)">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-20 md:items-start xl:flex-col xl:gap-10">
            {/* ICON WRAPPER */}
            <div className="md:shrink-0 md:relative">
              <img
                src="assets/icons/ride.svg"
                alt=""
                className="h-14 w-auto md:h-24"
              />
              <div className="hidden md:block absolute bg-(--c-light-grey) h-[512px] w-3.75 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-[4.5px] -z-1 xl:h-3.75 xl:min-w-[974px] xl:left-auto xl:translate-x-0 xl:right-12 xl:translate-y-1/2"></div>
            </div>
            <div className="md:flex flex-col gap-7">
              <h4 className="text-(--c-dark-navy)">Enjoy the ride</h4>
              <p className="text-(--c-dim-grey)">
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.
              </p>
            </div>
          </div>
        </section>
        {/* Hero Feature Large */}
        <section className="col-start-2 flex flex-col gap-30 mt-30 md:mt-36 xl:mt-[200px] xl:gap-40">
          {homeFeaturesLG.map((features, i) => (
            <FeaturesSectionsLG key={i} {...features} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

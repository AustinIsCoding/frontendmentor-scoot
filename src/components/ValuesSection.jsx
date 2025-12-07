const items = [
  {
    id: "01",
    title: "Our tech",
    img: "assets/images/our-tech.jpg",
    text: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    id: "02",
    title: "Our integrity",
    img: "assets/images/our-integrity.jpg",
    text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
  },
  {
    id: "03",
    title: "Our community",
    img: "assets/images/our-community.jpg",
    text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  },
];

const ValuesSection = ({ title }) => {
  return (
    <section className="col-start-2 flex flex-col items-center text-center gap-16 mt-30 md:gap-27 md:max-w-[456px] md:justify-self-center xl:gap-26 xl:max-w-none xl:justify-self-start">
      <h2 className="text-(--c-dark-navy)">{title}</h2>
      <div className="flex flex-col items-center text-center gap-14 xl:grid xl:grid-cols-3 xl:gap-7.5">
        {items.map((item) => (
          <div className="flex flex-col items-center gap-7">
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-full h-60 w-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 grid place-items-center h-24 w-24 rounded-full bg-(--c-yellow)">
                <h3>{item.id}</h3>
              </div>
            </div>
            <h3 className="text-(--c-dark-navy) mt-9 md:mt-15">{item.title}</h3>
            <p className="text-(--c-dim-grey)">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;

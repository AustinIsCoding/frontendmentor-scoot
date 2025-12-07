import { Link } from "react-router-dom";

const FeaturesSectionsLG = ({
  title,
  description,
  image,
  arrow,
  reverse = false,
}) => {
  return (
    <div className="flex flex-col items-center gap-14 xl:grid xl:grid-cols-2 xl:gap-[220px]">
      {/* Image Wrapper */}
      <div className={`relative ${reverse ? "xl:col-start-2 xl:order-2" : ""}`}>
        <img src={image} alt="" className="rounded-full" />
        {/* Arrow */}
        <img
          src={arrow.src}
          alt=""
          className={`max-w-none absolute z-1 ${arrow.position}`}
        />
        {/* Grey Circle */}
        <div
          className={`hidden md:block absolute rounded-full bg-(--c-light-grey) h-[445px] w-[445px] bottom-0 ${
            reverse ? "left-[calc(100%+4rem)]" : "right-[calc(100%+4rem)]"
          }`}
        ></div>
      </div>
      {/* Content */}
      <div
        className={`flex flex-col items-center text-center gap-6 md:gap-10 xl:gap-6 xl:items-start xl:text-start ${
          reverse ? "xl:col-start-1 xl:order-1" : ""
        }`}
      >
        <h2 className="text-(--c-dark-navy)">{title}</h2>
        <p className="text-(--c-dim-grey)">{description}</p>
        <Link to="" className="btn xl:mt-4">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSectionsLG;

const LocationTag = ({ location, className = "" }) => {
  return (
    <div className={`hidden md:block absolute ${className}`}>
      <div className="grid relative w-[120px] h-10 bg-(--c-yellow) place-items-center xl:w-[190px] xl:h-20">
        <span className="text-[13px] leading-7 tracking-[-0.036rem] text-(--c-dark-navy) xl:text-[24px] xl:tracking-(--tracking-d-5)">
          {location}
        </span>
        <div
          className=" absolute left-1/2 -translate-x-1/2 -bottom-1.5
          w-0 h-0 border-l-12 border-l-transparent
          border-r-12 border-r-transparent
          border-t-12 border-t-(--c-yellow) xl:-bottom-3 xl:border-l-20 xl:border-r-20 xl:border-t-20"
        ></div>
      </div>
    </div>
  );
};

export default LocationTag;

import React from "react";

const Badge = ({
  text,
  badgeContainerClass,
  bageBg = "bg-primary",
  badgeColor,
  dotBg= "bg-dot",
  textColor,
}) => {
  return (
    <div
      className={`rounded-5px px-6 py-2.5 text-white font-semibold text-base flex items-center gap-2.5 w-fit h-11 ${badgeContainerClass} ${bageBg} ${badgeColor}`}
    >
      <div className={`size-2.5 rounded-full  ${dotBg}`}></div>
      <p className={`font-semibold text-base ${textColor}`}>{text}</p>
    </div>
  );
};

export default Badge;

import React from "react";

const Card = ({
  title,
  body,
  cardBorder,
  cardColor,
  cardFont,
  cardSize,
  children,
}) => {
  return (
    <div
      className={`${cardSize} ${cardColor} ${cardBorder} flex flex-col items-center justify-around`}
    >
      <h2 className={`${cardFont} mt-6 px-4`}>{title}</h2>
      <p className="mb-6 px-5 text-center text-textWhite">{body}</p>
      {children}
    </div>
  );
};

export default Card;

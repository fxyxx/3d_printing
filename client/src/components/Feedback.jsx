import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";
import {
  CardBorder,
  CardColor,
  CardFont,
  CardSize,
  feedbackContent,
  settingsLeft,
  settingsRight,
  usersComments,
} from "../enums/enums";
import React from "react";

const Reviews = React.forwardRef((props, ref) => {
  return (
    <section className="h-screen flex flex-col gap-4 justify-center" ref={ref}>
      <h2 className="font-montserrat font-black uppercase text-5xl text-center px-2 ml-10 mt-10 text-textWhite">
        {feedbackContent.TITLE}
      </h2>
      <div className="flex flex-col justify-center gap-8 overflow-x-hidden img_bg4">
        <div className="img_bg4-1 absolute transform -translate-x-[-150%] -translate-y-[10%] "></div>
        <Slider {...settingsLeft}>
          {usersComments.map((comment, index) => (
            <Card
              cardBorder={CardBorder.HERO}
              cardColor={CardColor.PROJECT}
              cardFont={CardFont.REVIEW}
              cardSize={CardSize.REVIEW}
              key={index}
              title={`${comment.NAME} ${comment.ID}`}
              body={comment.TEXT}
            ></Card>
          ))}
        </Slider>

        <Slider {...settingsRight}>
          {usersComments.map((comment, index) => (
            <Card
              cardBorder={CardBorder.HERO}
              cardColor={CardColor.PROJECT}
              cardFont={CardFont.REVIEW}
              cardSize={CardSize.REVIEW}
              key={index}
              title={`${comment.NAME} ${comment.ID}`}
              body={comment.TEXT}
            ></Card>
          ))}
        </Slider>
      </div>
    </section>
  );
});

export default Reviews;

import Button from "./UI/Button";
import Card from "./Card";
import CustomModal from "./UI/CustomModal";

import {
  ButtonColor,
  ButtonBorder,
  ButtonSize,
  ButtonFont,
  CardBorder,
  CardColor,
  CardFont,
  CardSize,
  aboutContent,
} from "../enums/enums";

import useModal from "../hooks/useModal";
import React from "react";

const About = React.forwardRef((props, ref) => {
  const { modalIsOpen, openModal, closeModal } = useModal();

  return (
    <section
      className="h-screen flex flex-col items-start justify-center"
      ref={ref}
    >
      <h2 className="font-montserrat font-black uppercase text-5xl text-center px-2 ml-10 mt-10 text-textWhite">
        {aboutContent.TITLE}
      </h2>
      <div className="h-screen flex items-center justify-around">
        <div className="img_bg2"></div>
        <div className="img_bg3 flex items-center">
          <Card
            cardBorder={CardBorder.HERO}
            cardColor={CardColor.HERO}
            cardFont={CardFont.HERO}
            cardSize={CardSize.ABOUT}
            body={aboutContent.BODY}
          >
            <Button
              btnColor={ButtonColor.ORANGE}
              btnBorder={ButtonBorder.ORANGE}
              btnSize={ButtonSize.CARD}
              btnFont={ButtonFont.MEDIUM}
              buttonOnClick={openModal}
            >
              {aboutContent.BTN_TEXT}
            </Button>
          </Card>
        </div>
      </div>
      <CustomModal
        title={aboutContent.MODAL_TITLE}
        body={aboutContent.MODAL_BODY}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        styles={`Modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-textWhite p-8 rounded-xl shadow-lg w-5/6 h-4/5 `}
        overlayStyles={`Overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 `}
        onClick={closeModal}
      />
    </section>
  );
});

export default About;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from "./Card";
import Button from "./UI/Button";

import {
  ButtonColor,
  ButtonBorder,
  ButtonSize,
  ButtonFont,
  CardBorder,
  CardColor,
  CardFont,
  CardSize,
  modelsContent,
  completedProjectsContent,
} from "../enums/enums";

import useModal from "../hooks/useModal";
import CustomModal from "./UI/CustomModal";
import React from "react";

const Projects = React.forwardRef((props, ref) => {
  const { modalIsOpen, openModal, closeModal, modalContent } = useModal();

  const slides = modelsContent.map((slideContent, index) => (
    <Card
      cardBorder={CardBorder.HERO}
      cardColor={CardColor.PROJECT}
      cardFont={CardFont.HERO}
      cardSize={CardSize.SWIPER}
      body={slideContent.TITLE}
    >
      <img src={slideContent.IMAGE} alt="" className="w-4/6 rounded-xl mb-5" />
      <Button
        btnColor={ButtonColor.SWIPER}
        btnBorder={ButtonBorder.ORANGE}
        btnSize={ButtonSize.SWIPER}
        btnFont={ButtonFont.MEDIUM}
        buttonOnClick={() => openModal(slideContent)}
      >
        {completedProjectsContent.BTN_TEXT}
      </Button>
    </Card>
  ));

  return (
    <section className="h-screen w-full m-auto" ref={ref}>
      <h2 className="font-montserrat font-black uppercase text-5xl px-2 mx-10 pt-24 mb-14 text-right text-textWhite">
        {completedProjectsContent.TITLE}
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="z-0"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={index}
            virtualIndex={slideContent.ID}
            className=" transition duration-200 show flex items-center justify-center"
          >
            {slideContent}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      <CustomModal
        title={modalContent.MODAL_TITLE}
        body={modalContent.MODAL_BODY}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        styles={`Modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-textWhite p-8 rounded-xl shadow-lg w-2/5 h-4/5`}
        overlayStyles={`Overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 `}
        onClick={closeModal}
      />
    </section>
  );
});

export default Projects;

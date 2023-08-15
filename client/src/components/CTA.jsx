import Card from "./Card";
import Button from "./UI/Button";
import Form from "./UI/Form";

import {
  ButtonColor,
  ButtonBorder,
  ButtonSize,
  ButtonFont,
  CardBorder,
  CardColor,
  CardFont,
  CardSize,
  ctaContent,
} from "../enums/enums";

import useModal from "../hooks/useModal";
import CustomModal from "./UI/CustomModal";

const Order = () => {
  const { modalIsOpen, openModal, closeModal } = useModal();

  return (
    <section className="h-[85vh] flex flex-col items-center justify-center">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="img_bg5 ml-10 rounded-3xl w-[40%] h-[75%]"></div>
        <div className="img_bg6 rounded-xl w-[40%] h-[75%]"></div>
        <div className="img_bg7 mr-10 rounded-3xl w-[40%] h-[75%]"></div>
      </div>
      <Card
        title={ctaContent.TITLE}
        body={ctaContent.BODY}
        cardBorder={CardBorder.HERO}
        cardColor={CardColor.HERO}
        cardFont={CardFont.HERO}
        cardSize={CardSize.ORDER}
      >
        <Button
          btnColor={ButtonColor.ORANGE}
          btnBorder={ButtonBorder.ORANGE}
          btnSize={ButtonSize.CARD}
          btnFont={ButtonFont.MEDIUM}
          buttonOnClick={openModal}
        >
          {ctaContent.BTN_TEXT}
        </Button>
      </Card>
      <CustomModal
        title={ctaContent.MODAL_TITLE}
        body={<Form />}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        styles={`Modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-textWhite p-8 rounded-xl shadow-lg w-3/6 h-[90%]`}
        overlayStyles={`Overlay fixed top-0 left-0 w-full h-full bg-greyTrans backdrop-blur-[4px]`}
        onClick={closeModal}
      />
    </section>
  );
};

export default Order;

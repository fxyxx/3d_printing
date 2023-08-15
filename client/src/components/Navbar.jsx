import Button from "./UI/Button";
import CustomModal from "./UI/CustomModal";
import Form from "./UI/Form";

import {
  navLinks,
  ButtonColor,
  ButtonBorder,
  ButtonSize,
  ButtonFont,
  ctaContent,
} from "../enums/enums";
import { logo } from "../assets";

import useModal from "../hooks/useModal";

const Navbar = ({ onNavClick }) => {
  const { modalIsOpen, openModal, closeModal, modalContent } = useModal();

  return (
    <nav className="flex mx-28 pt-10 justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[40px] h-[40px] rounded-full" />
        <h2 className="font-montserrat font-medium text-textWhite">
          3D_Future
        </h2>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-6 ">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className="font-montserrat font-normal text-textWhite cursor-pointer hover:text-bgViolet transition duration-200"
            onClick={onNavClick[index]}
          >
            {link.title}
          </li>
        ))}
      </ul>

      <Button
        btnColor={ButtonColor.WHITE}
        btnBorder={ButtonBorder.BLUE}
        btnSize={ButtonSize.NAV}
        btnFont={ButtonFont.DEFAULT}
        buttonOnClick={openModal}
      >
        Order Now
      </Button>
      <CustomModal
        title={ctaContent.MODAL_TITLE}
        body={<Form />}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        styles={`Modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-textWhite p-8 rounded-xl shadow-lg w-3/6 h-[90%]`}
        overlayStyles={`Overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-60`}
        onClick={closeModal}
      />
    </nav>
  );
};

export default Navbar;

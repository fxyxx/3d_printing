import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";
import useModal from "../hooks/useModal";

import { footerLinks } from "../enums/enums";
import CustomModal from "./UI/CustomModal";
import WebsiteTerms from "./WebsiteTerms";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  const { modalIsOpen, openModal, closeModal, modalContent } = useModal();

  const components = ["faq", "contact", <PrivacyPolicy />, <WebsiteTerms />];

  return (
    <footer className="h-[20vh] flex items-end justify-between pb-10 px-28">
      <div className="flex gap-4">
        <img src={logo} alt="" className="w-14 h-14 rounded-full" />
        <div className="text-white flex flex-col items-start justify-center gap-1">
          <h4 className="font-montserrat font-bold text-textWhite">
            &#169; 3D_Future. All right reserved.
          </h4>
          <ul className="flex gap-4">
            {footerLinks.map((linkContent) => (
              <li
                className="font-montserrat font-normal text-textWhite cursor-pointer hover:text-bgViolet transition duration-200 uppercase"
                onClick={() => openModal(linkContent)}
                key={linkContent.title}
              >
                {linkContent.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-3">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTiktok}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTelegram}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
      <CustomModal
        title={modalContent.title}
        body={components[modalContent.id]}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        styles={`Modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-textWhite p-8 rounded-tl-3xl rounded-bl-3xl rounded-tr-none rounded-br-none shadow-lg w-3/6 h-[95%] overflow-y-auto scrollbar`}
        overlayStyles={`Overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-60`}
        onClick={closeModal}
      />
    </footer>
  );
};

export default Footer;

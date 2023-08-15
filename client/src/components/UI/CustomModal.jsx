import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CustomModal = ({
  title,
  body,
  isOpen,
  onRequestClose,
  onClick,
  styles,
  overlayStyles,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles}
      overlayClassName={overlayStyles}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{body}</div>
      <FontAwesomeIcon
        icon={faCircleXmark}
        size="2xl"
        style={{ color: "#d76e34" }}
        className="cursor-pointer absolute top-0 right-0 p-2 hover:bg-greyTrans border-orange rounded-xl rounded-tl-none rounded-tr-none rounded-br-none transition duration-200"
        onClick={onClick}
      />
      {children}
    </Modal>
  );
};

export default CustomModal;

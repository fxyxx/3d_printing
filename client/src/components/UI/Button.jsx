const Button = ({
  children,
  buttonOnClick,
  btnColor,
  btnSize,
  btnBorder,
  btnFont,
  title,
}) => {
  return (
    <button
      className={`${btnSize} ${btnColor} ${btnBorder} ${btnFont} file:transition duration-200`}
      onClick={buttonOnClick}
      // disabled={isWalletConnected}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;

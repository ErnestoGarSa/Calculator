const Button = (props) => {
  const { btnValue, className, click } = props;

  return (
    <button
      className={`rounded border border-2 ${className} text-light btn1 `}
      onClick={click}
    >
      {btnValue}
    </button>
  );
};

export default Button;

const Button = (props) => {
  const { btnValue, className, click } = props;

  return (
    <button
      className={`btn rounded border border-2 ${className}`}
      onClick={click}
    >
      {btnValue}
    </button>
  );
};

export default Button;

const Display = (props) => {
  const { value } = props;

  return <h1 className="total border border-2 text-end py-1 px-2">{value}</h1>;
};

export default Display;

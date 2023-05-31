import Button from "./Button";
import { useState } from "react";
import Display from "./Display";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [subtotal, setSubtotal] = useState(null);
  const [operator, setOperator] = useState(null);

  const handlerNumber = (num) => {
    if (value === "0") {
      setValue(num);
    } else {
      setValue(value + num);
      console.log("value", value);
    }
  };

  const handlerOperatorSelected = (operator) => {
    setSubtotal(value);
    setValue("0");
    setOperator(operator);
    console.log("operator", operator);
  };

  const handlerEqual = () => {
    const currentValue = parseFloat(value);
    const storedNumber = parseFloat(subtotal);

    if (operator === "+") {
      setValue(storedNumber + currentValue);
    } else if (operator === "-") {
      setValue(storedNumber - currentValue);
    } else if (operator === "*") {
      setValue(storedNumber * currentValue);
    } else if (operator === "/") {
      setValue(storedNumber / currentValue);
    } else if (operator === "**") {
      setValue(currentValue ** storedNumber);
    }

    setOperator(null);
    setSubtotal(null);
  };

  const handleClearClick = () => {
    setValue("0");
    setSubtotal(null);
    setOperator(null);
  };

  return (
    <div className="container ">
      <div className="calculator border border-2  p-3">
        <Display value={value} />
        <Button
          btnValue="/"
          value={value}
          setValue={setValue}
          click={() => handlerOperatorSelected("/")}
          className="operator"
        />
        <Button
          btnValue="*"
          value={value}
          setValue={setValue}
          click={() => handlerOperatorSelected("*")}
          className="operator"
        />
        <Button
          btnValue="**"
          value={value}
          setValue={setValue}
          click={() => handlerOperatorSelected("**")}
          className="operator"
        />
        <Button
          btnValue="-"
          value={value}
          setValue={setValue}
          click={() => handlerOperatorSelected("-")}
          className="operator"
        />
        <Button
          btnValue="7"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("7")}
          className="number"
        />
        <Button
          btnValue="8"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("8")}
          className="number"
        />
        <Button
          btnValue="9"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("9")}
          className="number"
        />
        <Button
          btnValue="+"
          className="add operator"
          value={value}
          setValue={setValue}
          click={() => handlerOperatorSelected("+")}
        />
        <Button
          btnValue="4"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("4")}
          className="number"
        />
        <Button
          btnValue="5"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("5")}
          className="number"
        />
        <Button
          btnValue="6"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("6")}
          className="number"
        />
        <Button
          btnValue="1"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("1")}
          className="number"
        />
        <Button
          btnValue="2"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("2")}
          className="number"
        />
        <Button
          btnValue="3"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("3")}
          className="number"
        />
        <Button
          btnValue="="
          className="equal operator"
          value={value}
          setValue={setValue}
          click={() => handlerEqual()}
        />
        <Button
          btnValue="0"
          className="cero number"
          value={value}
          setValue={setValue}
          click={() => handlerNumber("0")}
        />
        <Button
          btnValue="."
          value={value}
          setValue={setValue}
          click={() => handlerNumber(".")}
          className="number"
        />
        <Button
          btnValue="AC"
          value={value}
          setValue={setValue}
          click={() => handleClearClick()}
          className="clear"
        />
      </div>
    </div>
  );
};

export default Calculator;

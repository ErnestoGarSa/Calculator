import Button from "./Button";
import { useState } from "react";
import Display from "./Display";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [subtotal, setSubtotal] = useState(null);
  const [operator, setOperator] = useState(null);

  const number = (num) => {
    if (value === "0") {
      setValue(num);
    } else {
      setValue(value + num);
      console.log("value", value);
    }
  };

  const operatorSelected = (operator) => {
    setSubtotal(value);
    setValue("0");
    setOperator(operator);
    console.log("operator", operator);
  };

  const equal = () => {
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

  return (
    <div className="calculator border border-2 container p-3">
      <Display value={value} />
      <Button
        btnValue="/"
        value={value}
        setValue={setValue}
        click={() => operatorSelected("/")}
      />
      <Button
        btnValue="*"
        value={value}
        setValue={setValue}
        click={() => operatorSelected("*")}
      />
      <Button
        btnValue="**"
        value={value}
        setValue={setValue}
        click={() => operatorSelected("**")}
      />
      <Button
        btnValue="-"
        value={value}
        setValue={setValue}
        click={() => operatorSelected("-")}
      />
      <Button
        btnValue="7"
        value={value}
        setValue={setValue}
        click={() => number("7")}
      />
      <Button
        btnValue="8"
        value={value}
        setValue={setValue}
        click={() => number("8")}
      />
      <Button
        btnValue="9"
        value={value}
        setValue={setValue}
        click={() => number("9")}
      />
      <Button
        btnValue="+"
        className="add"
        value={value}
        setValue={setValue}
        click={() => operatorSelected("+")}
      />
      <Button
        btnValue="4"
        value={value}
        setValue={setValue}
        click={() => number("4")}
      />
      <Button
        btnValue="5"
        value={value}
        setValue={setValue}
        click={() => number("5")}
      />
      <Button
        btnValue="6"
        value={value}
        setValue={setValue}
        click={() => number("6")}
      />
      <Button
        btnValue="1"
        value={value}
        setValue={setValue}
        click={() => number("1")}
      />
      <Button
        btnValue="2"
        value={value}
        setValue={setValue}
        click={() => number("2")}
      />
      <Button
        btnValue="3"
        value={value}
        setValue={setValue}
        click={() => number("3")}
      />
      <Button
        btnValue="="
        className="equal"
        value={value}
        setValue={setValue}
        click={() => equal()}
      />
      <Button
        btnValue="0"
        className="cero"
        value={value}
        setValue={setValue}
        click={() => number("0")}
      />
      <Button
        btnValue="."
        value={value}
        setValue={setValue}
        click={() => number(".")}
      />
    </div>
  );
};

export default Calculator;

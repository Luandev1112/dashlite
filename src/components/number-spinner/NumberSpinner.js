import React, { useState } from "react";
import { Icon, Button } from "../Component";

const NSComponent = ({ max, min, step, outline, color, defaultVal }) => {
  const [value, setValue] = useState(defaultVal);
  const addVal = (n) => {
    if (value !== max) {
      if (step) {
        n = step;
      }
      setValue(value + n);
    }
  };
  const reduceVal = (n) => {
    if (value > 0 && value !== min) {
      if (step) {
        n = step;
      }
      setValue(value - n);
    }
  };
  return (
    <div className="form-control-wrap number-spinner-wrap">
      {" "}
      <Button
        outline={outline ? true : false}
        color={color}
        disabled={value === min ? true : false}
        className="btn-icon number-spinner-btn number-minus"
        onClick={() => reduceVal(1)}
      >
        <Icon name="minus"></Icon>
      </Button>{" "}
      <input
        type="number"
        className="form-control number-spinner"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        max={max}
        min={min}
      />{" "}
      <Button
        outline={outline ? true : false}
        color={color}
        disabled={value === max ? true : false}
        className="btn-icon number-spinner-btn number-plus"
        onClick={() => addVal(1)}
      >
        <Icon name="plus"></Icon>
      </Button>{" "}
    </div>
  );
};

export default NSComponent;

import React, { useState } from "react";

const InputSwitch = ({ label, id, checked }) => {
  const [inputCheck, setCheck] = useState(checked ? true : false);

  return (
    <React.Fragment>
      <input
        type="checkbox"
        className="custom-control-input"
        defaultChecked={inputCheck}
        onClick={() => setCheck(!inputCheck)}
        id={id}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </React.Fragment>
  );
};

export default InputSwitch;

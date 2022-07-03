import React from "react";

const RadioButton = React.forwardRef(
  ({ label, name, options, rest, onChange, errors }, ref) => {
    return (
      <>
        <div className="radio-group">
          <span>{label}</span>
          {options.map(({ label: optionLabel, value }, index) => {
            console.log("0-0-", value);
            return (
              <label className="form-radio-control">
                <input
                  id={index}
                  name={name}
                  type="radio"
                  value={value}
                  onChange={onChange}
                  ref={ref}
                  {...rest}
                />
                {optionLabel}
              </label>
            );
          })}
          <small>{errors?.type === "required" && "Select Gender"}</small>
        </div>
      </>
    );
  }
);

export default RadioButton;

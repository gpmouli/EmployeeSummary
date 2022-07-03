import React from "react";

const DropDown = React.forwardRef(
  ({ id, name, label, value, onChange, rest, options }, ref) => {
    return (
      <div className="form-control">
        <label>{label}</label>
        <select
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          ref={ref}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default DropDown;

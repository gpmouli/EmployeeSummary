import React from "react";

const InputField = React.forwardRef(
  ({ placeholder, type, value, name, change, label, errors, ...rest }, ref) => {
    return (
      <div className="form-control">
        <label>{label}</label>
        <input
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={change}
          ref={ref}
          {...rest}
          className={errors?.type ? "input-error" : ""}
        />
        <small>{errors?.type === "required" && "Field is required"}</small>
        {type === "text" && (
          <small>
            {errors?.type === "maxLength" &&
              "Maximum 10 characters is required"}
            {errors?.type === "minLength" && "Minimum 6 characters is required"}
          </small>
        )}
        {type === "number" && (
          <small>
            {errors?.type === "minLength" && "Minimum 8 characters is required"}
            {errors?.type === "maxLength" && "Minimum 8 characters is required"}
          </small>
        )}
        {type === "email" && (
          <small>{errors?.type === "pattern" && "Enter Valid Email ID"}</small>
        )}
      </div>
    );
  }
);

export default InputField;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { toast } from "react-toastify";
import InputField from "../Common/InputField";
import Columns from "../Common/Columns";
import RadioButton from "../Common/RadioButton";
import * as Constant from "../../Constants/constant";

const AddEmployee = () => {
  const employee = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const employeeData = {
      id: employee[employee.length - 1].id + 1,
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
    };
    dispatch({ type: "ADD_EMPLOYEE", payload: employeeData });
    toast.success("New Employee Added successfully");
    history("/employee/list");
  };

  return (
    <>
      <Columns title="Add Employee">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            label="First Name"
            {...register("firstName", {
              required: true,
              minLength: 6,
              maxLength: 10,
            })}
            errors={errors.firstName}
          />

          <InputField
            type="text"
            label="Last Name"
            {...register("lastName", {
              required: true,
              minLength: 6,
              maxLength: 10,
            })}
            errors={errors.lastName}
          />
          <InputField
            type="email"
            label="Email ID"
            {...register("emailId", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
            errors={errors.emailId}
          />
          <InputField
            type="number"
            label="Phone Number"
            {...register("phoneNumber", {
              required: true,
              minLength: 8,
              maxLength: 8,
            })}
            errors={errors.phoneNumber}
          />
          <RadioButton
            label="Select Gender"
            options={Constant.radioOptions}
            value={(e) => e.target.value}
            errors={errors.gender}
            {...register("gender", { required: true })}
          />
          <div className="btn-sec">
            <Button htmlType="submit" type="primary" block>
              SUBMIT
            </Button>
            <Button block onClick={() => navigate("/employee/list")}>
              Cancel
            </Button>
          </div>
        </form>
      </Columns>
    </>
  );
};

export default AddEmployee;

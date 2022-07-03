import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { toast } from "react-toastify";
import InputField from "../Common/InputField";
import Columns from "../Common/Columns";
import RadioButton from "../Common/RadioButton";
import * as Constant from "../../Constants/constant";

const EditEmployee = () => {
  const { id } = useParams();
  // Get Employee from state
  const employee = useSelector((state) => state);
  // Get current employee from id
  const currentEmployee = employee.find(
    (employee) => employee.id === parseInt(id)
  );
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    // retrieve employee data
    setEmployeeData({
      firstName: currentEmployee.firstName,
      lastName: currentEmployee.lastName,
      emailId: currentEmployee.emailId,
      phoneNumber: currentEmployee.phoneNumber,
      gender: currentEmployee.gender,
    });
  }, [currentEmployee]);

  useEffect(() => {
    // reset form with employee data
    reset(employeeData);
  }, [employeeData, reset]);

  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = (data) => {
    console.log("-=-=-data", data);
    setEmployeeData(data);
    const employeePayload = {
      id: parseInt(currentEmployee.id),
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
    };
    dispatch({ type: "UPDATE_EMPLOYEE", payload: employeePayload });
    toast.success("Updated Employee details successfully");
    history("/employee/list");
  };

  return (
    <div>
      {currentEmployee ? (
        <>
          <Columns title="Edit Employee">
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
                label="What is your favorite fruit?"
                options={Constant.radioOptions}
                value={(e) => e.target.value}
                {...register("gender", { required: true })}
              />
              <div className="btn-sec">
                <Button htmlType="submit" type="primary" block>
                  UPDATE
                </Button>
                <Button block onClick={() => navigate("/employee/list")}>
                  Cancel
                </Button>
              </div>
            </form>
          </Columns>
        </>
      ) : (
        <div>Employee with id{id} not exists</div>
      )}
    </div>
  );
};

export default EditEmployee;

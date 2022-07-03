import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button } from "antd";
import Summary from "./Summary";
import "antd/dist/antd.min.css";
import "../App.css";
import { toast } from "react-toastify";

const EmployeeSummary = () => {
  // Employee List from State
  const employeeListState = useSelector((state) => state);
  // Instead of id: 0 to replace id: 1
  const employeeList = employeeListState
    .filter((a, i, x) => x.findIndex((t) => t.id === a.id) === i)
    .reduce((employees, item, index) => {
      item.id = index + 1;
      employees.push(item);
      return employees;
    }, []);
  const dispatch = useDispatch();
  const deleteEmployee = (id) => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    toast.info("Successfully Deleted");
  };
  const navigate = useNavigate();
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={12}>
        <div>
          <h1 className="summary-title"> Employee Summary </h1>
          <div className="add-employee-btn">
            <Button type="primary" onClick={() => navigate("/employee/add")}>
              Add Employee
            </Button>
          </div>
          <div>
            <Summary data={employeeList} deleteEmployee={deleteEmployee} />
          </div>
        </div>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={6}></Col>
    </Row>
  );
};

export default EmployeeSummary;

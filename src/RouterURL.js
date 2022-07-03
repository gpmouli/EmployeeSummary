import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EmployeeSummary from "./Components/EmployeeSummary";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";

const RouterURLS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/employee/list" />} />
        <Route exact path="/employee/list" element={<EmployeeSummary />} />
        <Route path="/employee/add" element={<AddEmployee />} />
        <Route path="/employee/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterURLS;

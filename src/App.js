import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import NewEmployeeForm from "./components/NewEmployeeForm";
import AllEmployeesData from "./components/AllEmployeesData";
import UpdateEmployeeForm from "./components/UpdateEmployeeForm";
import "./App.css";

const defaultUserData = [
  { userId: 1001, userName: "Sai", userSalary: "9000", userDepartment: "Java" },
  {
    userId: 1002,
    userName: "sachin",
    userSalary: 19000,
    userDepartment: "OraApps",
  },
  { userId: 1003, userName: "Vikesh", userSalary: 29000, userDepartment: "BI" },
];

function App() {
  const [employeeData, setEmployeeData] = useState([...defaultUserData]);
  const [updateEmployeeData, setUpdateEmployeeData] = useState(null);
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);
  const handleEmployeeFormData = (data) => {
    console.log(data);
    setEmployeeData((prev) => [...prev, data]);
    toast.info("submitted employee data successfully");
  };
  const handleUpdateClick = (id) => {
    console.log(id);
    const [userData] = employeeData.filter((item) => item.userId === id);
    setUpdateEmployeeData(userData);
    setToggleUpdateForm(true);
  };

  const handleDeleteClick = (id) => {
    const updatedItems = employeeData.filter((item) => item.userId !== id);
    setEmployeeData([...updatedItems]);
    toast.error("Item deleted successfully");
  };

  const handleUpdateEmployeeData = (udata) => {
    const updatedData = employeeData.map((ud) => {
      if (ud.userId === udata.id) {
        return {
          userId: udata.id,
          userName: udata.name,
          userSalary: udata.salary,
          userDepartment: udata.department,
        };
      } else {
        return ud;
      }
    });
    setEmployeeData(updatedData);
    setToggleUpdateForm(false);
    toast.info("Item updated successfully");
  };
  return (
    <div className="App">
      <NewEmployeeForm onHandleEmployeeFormData={handleEmployeeFormData} />
      <AllEmployeesData
        data={employeeData}
        onHandleEployeeUpdate={handleUpdateClick}
        onHandleDeleteEmployee={handleDeleteClick}
      />
      {toggleUpdateForm && (
        <UpdateEmployeeForm
          updatedData={updateEmployeeData}
          onUpdateEmployee={handleUpdateEmployeeData}
        />
      )}
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default App;

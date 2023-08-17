import { useState, useEffect } from "react";
const UpdateEmployeeForm = ({ updatedData, onUpdateEmployee }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  console.log(updatedData?.userId, updatedData?.userSalary);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userId: id,
      userName: name,
      userSalary: salary,
      userDepartment: department,
    };
    setId("");
    setName("");
    setSalary("");
    setDepartment("");
  };

  useEffect(() => {
    setId(updatedData?.userId);
    setName(updatedData?.userName);
    setSalary(updatedData?.userSalary);
    setDepartment(updatedData?.userDepartment);
  }, [updatedData]);
  return (
    <div>
      <h2 className="form-heading">UPDATE EMPLOYEE</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <label className="label" htmlFor="id">
            ID
          </label>
          <input
            className="inputBox"
            type="text"
            id="id"
            name="id"
            onChange={(e) => {
              e.preventDefault();
              setId(e.target.value);
            }}
            value={id}
          />
        </div>
        <div className="row">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="inputBox"
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="row">
          <label className="label" htmlFor="salary">
            Salary
          </label>
          <input
            className="inputBox"
            type="text"
            id="salary"
            name="salary"
            onChange={(e) => {
              e.preventDefault();
              setSalary(e.target.value);
            }}
            value={salary}
          />
        </div>
        <div className="row">
          <label className="label" htmlFor="department">
            Department
          </label>
          <input
            className="inputBox"
            type="text"
            id="department"
            name="department"
            onChange={(e) => {
              e.preventDefault();
              setDepartment(e.target.value);
            }}
            value={department}
          />
        </div>
        <button
          className="button"
          type="submit"
          onClick={() => {
            onUpdateEmployee({
              id,
              name,
              salary,
              department,
            });
          }}
        >
          Update Employee
        </button>
      </form>
    </div>
  );
};
export default UpdateEmployeeForm;

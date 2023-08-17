const AllEmployeesData = ({
  data,
  onHandleEployeeUpdate,
  onHandleDeleteEmployee,
}) => {
  const newObjList = data.map((emp, empIndex) => {
    return (
      <tr key={empIndex}>
        <td>{emp.userId}</td>
        <td>{emp.userName}</td>
        <td>{emp.userSalary}</td>
        <td>{emp.userDepartment}</td>
        <td className="buttons">
          <button
            className="buttons-tables"
            onClick={() => onHandleEployeeUpdate(emp.userId)}
          >
            Update
          </button>
          <button
            className="buttons-tables"
            onClick={() => onHandleDeleteEmployee(emp.userId)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="form">
      <h2 className="form-heading">Show All EMPLOYEE</h2>
      <table className="table-container" border="2px">
        <thead className="heading-table">
          <th>ID</th>
          <th>NAME</th>
          <th>SALARY</th>
          <th>DEPARTMENT</th>
          <th>ACTION</th>
        </thead>
        <tbody>{newObjList}</tbody>
      </table>
    </div>
  );
};
export default AllEmployeesData;

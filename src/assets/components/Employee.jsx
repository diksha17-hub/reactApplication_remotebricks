import React, { useState, useEffect } from "react";
import axios from "axios";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"; 

    axios
      .get(apiUrl)
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching employee data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>Employee List</h1>

      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Sr.No. </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="3">No employees found.</td>
            </tr>
          ) : (
            employees.map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row">{index + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;

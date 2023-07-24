import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [name, setName] = useState(selectedEmployee.name);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [phoneNo, setPhoneNo] = useState(selectedEmployee.phoneNo);
  const [leaveType, setLeaveType] = useState(selectedEmployee.leaveType);
  

  const handleUpdate = e => {
    e.preventDefault();

    if (!name || !email || !phoneNo || !leaveType) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      name,
      email,
      phoneNo,
      leaveType,
    };

    // TODO: Update document

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text:  'Employee data has been updated.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex justify-center pt-[5em]">
      <form onSubmit={handleUpdate} className="flex flex-col h-screen font-bold">
        {/* Edit-employee */}
        <h3 className="text-xl text-red-400 mb-2 text-center">
          Edit Employees
        </h3>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter name.."
          name="name"
          className="p-2 w-80 leading-5 mb-5 rounded-md border border-green-500 outline-none"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}         
          value={email}
          type="email"
          name="email"
          placeholder="Enter email..." 
          className="p-2 w-80 mb-5 leading-5 border rounded-md border-green-500 outline-none"
        />
        <label htmlFor="phoneNo">Phone No</label>
        <input
          onChange={(e) => setPhoneNo(e.target.value)}
          value={phoneNo}
          type="number"
          name="phoneNo"
          placeholder="Enter phone..."
          className="p-2 w-80 mb-5 rounded-md leading-5 border border-green-500 outline-none"
        />
        <label htmlFor="LeaveType">Leave Type</label>
        <input
          onChange={(e) => setLeaveType(e.target.value)}
          value={leaveType}
          type="text"
          name="leaveType"
          placeholder="Enter leave type..."
          className="p-2 w-80 rounded-md leading-5 border border-green-500 outline-none"
        />
        <div className="mt-3 flex justify-evenly">
         <button onClick={() => setIsEditing(false)} className="bg-red-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Cancel
          </button>
          <button  className="bg-green-500 leading-8 px-4 py-1 rounded-md text-white hover:opacity-[.7]">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
};

export default Edit;
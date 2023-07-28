import React, { useState, useEffect} from 'react';
import Swal from 'sweetalert2';

import Navbar from './Navbar';
import Table from "./Table";
import Add from './Add';
import Edit from './Edit';

import {collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import { db } from '../config/firebase'

// import { employeesData } from '../data/data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // getsEmployees fucntion
  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const employees = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
        setEmployees(employees);
  }

  // useEffect hook
  useEffect(() => {
    getEmployees()
  }, []);

  // Edit idual employee from the list.
  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  // Delete individual employee from the list.
  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        // TODO delete document from the database
        deleteDoc(doc(db, "employees", id));

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Employee data has been deleted.',
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        setEmployees(employeesCopy);
      }
    });
  };

  // Redering to the DOM
  return (
    <div className='md:mx-auto'>
         {!isAdding && !isEditing && (
      <>
            <Navbar
              setIsAdding={setIsAdding}
              setIsAuthenticated={setIsAuthenticated}
            />
            <Table
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
        </>
         )}
         {
          isAdding && (
            <Add 
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
            getEmployees={getEmployees}
            />
          )}
          {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;


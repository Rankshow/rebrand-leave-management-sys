import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { CloseCircleOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

const Table = ({employees, handleEdit, handleDelete, setIsAdding}) => {

  return (
<>
    <div className='max-w-2xl mx-auto mt-[5em] flex items-center justify-between mb-3'>
       <h3 className='text-2xl font-medium text-red-400'>Employees Details</h3>
    <button onClick={() => setIsAdding(true)} className='text-green-700 rounded-md text-2xl tracking-wider hover:opacity-[.7]'><PlusCircleOutlined /></button>
    </div>
    <div className='flex justify-center max-w-4xl mx-auto'>
      <table className="table-auto w-screen">
      <thead className="bg-blue-700 border-separate border-spacing-2 b text-white cursor-pointer ">
        <tr>
          <th className='border border-spacing-1 py-2'>id</th>
          <th className='border border-spacing-1 py-2'>Name</th>
          <th className='border border-spacing-1 py-2'>Email</th>
          <th className='border border-spacing-1 py-2'>Phone No</th>
          <th className='border border-spacing-1 py-2'>Leave Type</th>
          <th className='border border-spacing-1 py-2'>Action</th>
        </tr>
      </thead>
      <tbody className='py-2'>
              { employees ? (
                 employees.map((data, i) => (
                  <tr key={data.id} className='hover:opacity-[.7] bg-gray-300 text-center'>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNo}</td>
                    <td>{data.leaveType}</td>
                    <td><button onClick={() => handleDelete(employees.id)} className='text-red-600 font-bold text-2xl pb-1 hover:opacity-[.7]'><CloseCircleOutlined /></button>
                  <button onClick={() => handleEdit(employees.id)} className='text-green-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EditOutlined /></button>
                    <button className='text-orange-600 font-bold text-2xl pb-1 md:ml-3  hover:opacity-[.7]'><EyeOutlined /></button>
                    </td>  
                  </tr>
                ))
                ) : (
                   <tr>
                     <td className='mx-auto'> Spinnal</td>
                   </tr>
                )
              }
          </tbody>
    </table>
    </div>
  </>
  );
};

export default Table;
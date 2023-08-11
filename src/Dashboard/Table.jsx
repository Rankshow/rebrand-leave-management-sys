import React from 'react';
// import { PlusCircleOutlined } from '@ant-design/icons';
// import { EyeOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Oval } from 'react-loader-spinner';

const Table = ({ employees, handleEdit, handleDelete }) => {
 

  return (
   <>
    <div className='max-w-2xl mx-auto mt-[5em] flex items-center justify-between mb-3'>
       <h3 className='text-2xl font-medium text-red-400 ml-3'>Employees Details</h3>
    </div>
    
    {/* For responsivess, once it gets to small screen the table disappear... */}
    <div className='flex justify-center max-w-4xl mx-auto overflow-auto  hidden roundedlg shadow-sm md:block'>
      <table className="table-auto w-full">
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
      <tbody className='py-2 divide-y divide-gray-100'>
              { employees ? (
                 employees.map((data, i) => (
                  <tr key={data.id} className='hover:opacity-[.7] bg-gray-300 text-center'>
                    <td className='w-20 p-3 whitespace-nowrap'>{data.id}</td >
                    <td className='w-23 whitespace-nowrap'>{data.name}</td >
                    <td className='w-23 whitespace-nowrap'>{data.email}</td >
                    <td className='w-23 whitespace-nowrap'>{data.phoneNo}</td >
                    <td className='w-23 whitespace-nowrap'>{data.leaveType}</td >
                    <td className='w-23 whitespace-nowrap'><button onClick={() => handleDelete(data.id)} className='text-red-600 font-bold text-2xl pb-1 hover:bg-red-300 hover:rounded-full'><CloseCircleOutlined /></button>
                  <button onClick={() => handleEdit(data.id)} className='text-green-600 font-bold text-2xl pb-1 md:ml-3 hover:bg-green-400 hover:rounded-full'><EditOutlined /></button>
                    {/* <button className='text-orange-600 font-bold text-2xl pb-1 md:ml-3  hover:bg-orange-400 hover:rounded-full'><EyeOutlined /></button> */}
                    </td>  
                  </tr>
                ))
                ) : (
                   <tr>
                     <td className='flex justify-center max-w-4xl mx-auto'>
                     <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                     </td>
                   </tr>
                )
              }
          </tbody>
    </table>
    </div>

  {/*Using grid to show the grid block on a on small screens*/}
    <div className="grid grid-cols-1 gap-4 md:hidden">
         <div className='bg-blue-700 rounded-lg mx-3 divide-x'>
          <div className='flex items-center ml-3 space-x-5 p-3 text-white'>
            <div className='font-medium'>id</div>
            <div className='font-medium'>Name</div>
            <div className='font-medium'>Email</div>
            <div className='font-medium'>Phone No</div>
            <div className='font-medium'>Leave Type</div>
            <div className='font-medium'>Action</div>
          </div>
        </div>
          <div className='divide-y divide-gray-100 mx-5 rounded-lg'>
              { employees ? (
                 employees.map((data, i) => (
                  <div key={data.id} className='hover:opacity-[.7] rounded-lg mb-3 bg-gray-300 text-center font-medium'>
                    <div className='w-23 p-3 whitespace-nowrap text-center'>{data.id}</div >
                    <div className='w-23 whitespace-nowrap'>{data.name}</div >
                    <div className='w-23 whitespace-nowrap'>{data.email}</div >
                    <div className='w-23 whitespace-nowrap'>{data.phoneNo}</div >
                    <div className='w-23 whitespace-nowrap'>{data.leaveType}</div >
                    <div className='w-23 whitespace-nowrap pb-3'><button onClick={() => handleDelete(data.id)} className='text-red-600 font-bold text-2xl pb-1 hover:bg-red-300 hover:rounded-full'><CloseCircleOutlined /></button>
                  <button onClick={() => handleEdit(data.id)} className='text-green-600 font-bold text-2xl pb-1 md:ml-3 hover:bg-green-400 hover:rounded-full'><EditOutlined /></button>
                    {/* <button className='text-orange-600 font-bold text-2xl pb-1 md:ml-3  hover:bg-orange-400 hover:rounded-full'><EyeOutlined /></button> */}
                    </div>  
                  </div>
                ))
                ) : (
                   <div>
                     <div className='flex justify-center max-w-4xl mx-auto'>
                     <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                     </div>
                   </div>
                )
              }
          </div>         
         </div>
  </>
  );
};

export default Table;
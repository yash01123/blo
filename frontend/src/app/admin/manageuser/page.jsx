'use client';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const [userList, setUserList] = useState([]);

  const fetchUsers = () => {
    fetch('http://localhost:5000/user/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setUserList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = () => {
    
  }

  const displayUsers = () => {
    return userList.map(user => (
      <tr className="mt-0 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-white ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap"
        >
          {user._id}
        </th>
        <td className="px-6 py-4 text-white">{user.name}</td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">{user.createdAt}</td>
        
      </tr>
    ))
  }

  return (
    <div>
      <div className="mt-12 mx-10 relative overflow-x-auto w-10/12   ml-64">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div>
            
            {/* Dropdown menu */}
           
          </div>
         
          
        </div>
        <div className="relative overflow-x-auto shadow-md ">
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className=' text-black text-sm'>
                 <th scope="col" className="px-6 py-3">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                
              </tr>
            </thead>
            <tbody>
              {displayUsers()}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default ManageUser;
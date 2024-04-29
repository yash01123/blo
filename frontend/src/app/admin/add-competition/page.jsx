'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const compeSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Full Name required').required('hai nhi kya?'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('number is required'),
  userName: Yup.string().min(4, 'required').required('hai nhi kya?'),
  textarea: Yup.string().min(1, 'Full Name required').required('hai nhi kya?'),

});






const compe = () => {
  const compeForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      userName: '',
      textarea: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send values to backend

      fetch('http://localhost:5000/admin/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Form Submited Successfully');
          } else {
            toast.error('Form submission Successfully')
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Form submission failed')
        });
    },
    validationSchema: compeSchema
  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success('File uploaded successfully')
      }
    });
  };

  return (
    <div className='bg-black ml-11 mr-11'>
      <>
        {/* component */}
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">

          <h1 className="text-xl font-bold text-white capitalize dark:text-white text-center">
            Enter Our Contest!
          </h1>
          <br />
          <form onSubmit={compeForm.handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white dark:text-gray-200" htmlFor="username">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={compeForm.handleChange}
                  value={compeForm.values.name}

                  placeholder=""
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {compeForm.touched.name && (
                  <small class="text-danger">{compeForm.errors.name}</small>
                )}
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={compeForm.handleChange}
                  value={compeForm.values.email}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {compeForm.touched.email && (
                  <small class="text-danger">{compeForm.errors.email}</small>
                )}
              </div>
              <div>
                <label className="text-white dark:text-gray-200" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  onChange={compeForm.handleChange}
                  value={compeForm.values.phone}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {compeForm.touched.phone && (
                  <small class="text-danger">{compeForm.errors.phone}</small>
                )}
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="userName"
                >
                  user Name
                </label>
                <input
                  id="userName"
                  type="text"
                  onChange={compeForm.handleChange}
                  value={compeForm.values.userName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {compeForm.touched.userName && (
                  <small class="text-danger">{compeForm.errors.userName}</small>
                )}
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="category"
                >
                  Select Category
                </label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>Tech</option>
                  <option>Art</option>
                  <option>Maths</option>
                  <option>Adventure</option>
                </select>
              </div>


              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  onChange={compeForm.handleChange}
                  value={compeForm.values.date}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {compeForm.touched.date && (
                  <small class="text-danger">{compeForm.errors.date}</small>
                )}
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="textarea"
                >
                  Text Area
                </label>
                <textarea
                  id="textarea"
                  type="textarea"
                  onChange={compeForm.handleChange}
                  value={compeForm.values.textarea}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  defaultValue={""}
                />
                {compeForm.touched.textarea && (
                  <small class="text-danger">{compeForm.errors.textarea}</small>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          onChange={uploadFile}
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6 ">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </section>

      </>

    </div>
  )
}

export default compe

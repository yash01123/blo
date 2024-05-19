'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const ViewCompetition = () => {

  const [competitionData, setCompetitionData] = useState(null);

  const { id } = useParams();

  const fetchCompetitionData = () => {
    fetch('http://localhost:5000/competition/getbyid/' + id)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBlogData(data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCompetitionData();
  }, []);

  const formatDate = (date) => {
    return new Date(date).getDay() + ', ' + new Date(date).getMonth() + ' ' + new Date(date).getDate() + ', ' + new Date(date).getFullYear();
  }

  const displaycompetitions = () => {
    if (competitionData !== null)
      return (
        <div>
          <h1 className='text-center text-blue-900  text-6xl font-bold'>{competitionData.title}</h1>



          <hr className='mb-20 border-black' />
          <div className='grid grid-cols-12'>
            <div className="col-span-3">
              {/* <img className="w-16 h-16 rounded-full block mx-auto  mb-4 " src={`${process.env.NEXT_PUBLIC_API_URL}/${blogData.user.avatar}`} alt="" /> */}

              <div className="flex ">
                <div className="font-medium dark:text-white">
                  <p className='text-center text-slate-500 text-md'>{new Date(competitionData.createdAt).toLocaleDateString()}</p>

                  {/* <p className='text-center text-xl'>{blogData.user.name}</p> */}
                  <div className="text-sm text-gray-500 text-center dark:text-gray-400">Joined in {MONTH_NAMES[new Date(competitionData.createdAt).getMonth()] + ' ' + new Date(competitionData.createdAt).getFullYear()}</div>
                  <hr className='my-4 border-black' />
                  <p className="">{competitionData.endDate}</p>
                </div>

              </div>
              <>
  <button
    type="button"
    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    data-hs-overlay="#hs-focus-management-modal"
  >
    Comment
  </button>
  <div
    id="hs-focus-management-modal"
    className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
  >
    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
          <h3 className="font-bold text-gray-800 dark:text-white">
            
          </h3>
          <button
            type="button"
            className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            data-hs-overlay="#hs-focus-management-modal"
          >
            <span className="sr-only">Close</span>
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <label
            htmlFor="input-label"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
           Comment
          </label>
          <input
            type="email"
            id="input-label"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:text-neutral-400"
           
            autofocus=""
          />
        </div>
        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
          {/* <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            data-hs-overlay="#hs-focus-management-modal"
          >
            Close
          </button> */}
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</>


            </div>
            <div className="col-span-9 overflow-auto">
              <MDEditor.Markdown source={competitionData.content} className='overflow-auto' height="200px" />
            </div>
          </div>
        </div>
      )
    else return <p>Loading...</p>
  }

  return (
    <div className='pt-32 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {displaycompetitions()}
    </div>
  )
}

export default ViewCompetition;
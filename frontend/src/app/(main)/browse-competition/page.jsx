'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Browse = () => {

    const [competitionList, setCompetitionList] = useState([]);

    const fetchCompetitionData = () => {
        fetch('http://localhost:5000/competition/getall')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setCompetitionList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchCompetitionData();
    }, [])

    const displayCompetition = () => {
        return competitionList.map(comp => (
            
            <div className="group flex flex-col h-full  border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                
                <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <div className="aspect-w-16 aspect-h-11">
                    
                        <img
                            className="w-full object-contain rounded-xl"
                            style={{ height: '200px' }}
                            src={`http://localhost:5000/${comp.banner}`}
                            alt={comp.title}
                        />
                    </div>
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                        {comp.title}
                    </span>
                   
                    <p className="mt-3 text-gray-500">
                        {comp.description}
                    </p>
                    <p className="mt-3 text-gray-500">
                        <h5>Prize:- {comp.prize}</h5>
                    
                    </p>
                </div>
                
                    <Link
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                        href={"/view-competition/" + comp._id}
                    >
                        More Details
                    </Link>
                </div>
           
        ))
    }


    return (
        <div>
            {/* Card Blog */}
            <div className="max-w-[85rem] mt-6 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayCompetition()}
                </div>
                {/* End Grid */}

            </div>
            


            {/* End Card Blog */}

        </div>

    )
}

export default Browse
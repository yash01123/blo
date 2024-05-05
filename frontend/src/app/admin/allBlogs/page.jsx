import React from 'react'

const page = () => {
  return (
    <div>
     
      <div>
      <div className='fixed w-full z-30 top-0'>
        <div className="w-full py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky left-0">
          <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
            <h2 className="font-bold text-black text-2xl">
             NUKKAD-{" "}
              <span className="bg-[#f84525] text-white px-3 rounded-md">BLOG</span>
            </h2>
          </a>
          <button
            type="button"
            className="text-lg text-gray-900 font-semibold sidebar-toggle"
          >
            <i className="ri-menu-line" />
          </button>
          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown">
              <a
                href="/admin/dashboard"
                className="text-black mr-4 rounded flex items-center justify-center  hover:text-gray-600"
              >
                Dashboard
              </a>
            </li>
            <li className="mr-1 dropdown">
              <a
                href="/admin/plugins"
                className="text-black mr-4 rounded flex items-center justify-center  hover:text-gray-600"
              >
                All Blogs
              </a>
            </li>
            <li className="mr-1 dropdown">
              <a
                href="/admin/manageuser"
                className="text-black mr-4 rounded flex items-center justify-center  hover:text-gray-600"
              >
                Users
              </a>
            </li>

            <li className="dropdown ml-3">
              <a href="/admin/profile" className="dropdown-toggle flex items-center">
                <div className="flex-shrink-0 w-10 h-10 relative">
                  <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                      alt=""
                    />
                    <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping" />
                    <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full" />
                  </div>
                </div>
                <div className="p-2 md:block text-left">
                  <h2 className="text-sm font-semibold text-gray-800">Yash Vardhan Singh</h2>
                  <p className="text-xs text-gray-800">Admin</p>
                </div>
              </a>
            </li>
            <li className="mr-1 dropdown">
              <a
                href="/"
                className="text-black mr-1 rounded flex items-center justify-center  hover:text-gray-600"
              >
              <img style={{height:45}}src="/logout.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div>
      <div className="fixed left-0 top-10 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
    <ul className="mt-4">
      <span className="text-black font-bold">ADMIN</span>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-black hover:bg-blue hover:text-gray-100 rounded-md group-[.active]:bg-blue group-[.active]:text-white group-[.selected]:bg-blue group-[.selected]:text-gray-100"
        >
          <i className="ri-home-2-line mr-3 text-lg" />
          <span className="text-sm">Dashboard</span>
        </a>
      </li>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-black hover:bg-blue hover:text-gray-100 rounded-md group-[.active]:bg-blue group-[.active]:text-white group-[.selected]:bg-blue group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
        >
          <i className="bx bx-user mr-3 text-lg" />
          <span className="text-sm">Users</span>
          <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
        </a>
      </li>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-black hover:bg-blue hover:text-gray-100 rounded-md group-[.active]:bg-blue group-[.active]:text-white group-[.selected]:bg-blue group-[.selected]:text-gray-100"
        >
          <i className="bx bx-list-ul mr-3 text-lg" />
          <span className="text-sm">Activities</span>
        </a>
      </li>
      <span className="text-black font-bold">PERSONAL</span>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-black hover:bg-blue hover:text-gray-100 rounded-md group-[.active]:bg-blue group-[.active]:text-white group-[.selected]:bg-blue group-[.selected]:text-gray-100"
        >
          <i className="bx bx-bell mr-3 text-lg" />
          <span className="text-sm">Notifications</span>
          <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red  rounded-full">
            5
          </span>
        </a>
      </li>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-black hover:bg-blue hover:text-gray-100 rounded-md group-[.active]:bg-blue group-[.active]:text-white group-[.selected]:bg-blue group-[.selected]:text-gray-100"
        >
          <i className="bx bx-envelope mr-3 text-lg" />
          <span className="text-sm">Messages</span>
          <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
            2 New
          </span>
        </a>
      </li>
    </ul>
  </div>




  <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ml-64 mt-20">
      <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
        <img
          className="w-full"
          src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          alt=""
        />
        <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          Live
        </div>
        <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
          <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
          <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Likes
          </span>
          <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Dislikes
          </span>
        </div>
        <div className="desc p-4 text-gray-800">
          <a
            href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
            target="_new"
            className="title font-bold block cursor-pointer hover:underline"
          >
            Pubg Mobile Custom Room (Unlimited)
          </a>
          <a
            href="https://www.youtube.com/user/sam14319"
            target="_new"
            className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
          >
            @dynamo_gaming
          </a>
          <span className="description text-sm block py-2 border-gray-400 mb-2">
            lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
          </span>
        </div>
      </div>
     
     
        
        

      </div>
      </div>
      
  
</div>      
    
  )
}

export default page

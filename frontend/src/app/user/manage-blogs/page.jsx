import React from 'react'

const ManageBlogs = () => {
  return (
    <div>
    <div className='flex flex-col  sm:flex-row  '>
     < >
  {/* component */}
  {/* This is an example component */}
  <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
    <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      {/* Tag Discount */}
      <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
        Open
      </div>
      <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500" />
      <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600" />
      <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div className="relative">
          {/* :src="image.largeImageURL"     */}
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
            className="max-h-60 object-cover rounded-t-xl"
            alt=""
          />
          {/* Tag rekomendasi */}
          <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
            Recommended
          </div>
        </div>
        <div className="px-2 py-1">
          {/* Product Title */}
          <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>
          <div className="flex py-2">
            {/* Distance */}
            <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
              0.5 Km
            </div>
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* Rating total */}
                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  4.96
                  {/* Jumlah review */}
                  <span className="text-gray-500 font-normal">
                    (76 rewiews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Tombol pesan */}
          <a
            className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            href="#"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</>
<>
  {/* component */}
  {/* This is an example component */}
  <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
    <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      {/* Tag Discount */}
      <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
        Open
      </div>
      <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500" />
      <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600" />
      <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div className="relative">
          {/* :src="image.largeImageURL"     */}
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
            className="max-h-60 object-cover rounded-t-xl"
            alt=""
          />
          {/* Tag rekomendasi */}
          <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
            Recommended
          </div>
        </div>
        <div className="px-2 py-1">
          {/* Product Title */}
          <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>
          <div className="flex py-2">
            {/* Distance */}
            <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
              0.5 Km
            </div>
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* Rating total */}
                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  4.96
                  {/* Jumlah review */}
                  <span className="text-gray-500 font-normal">
                    (76 rewiews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Tombol pesan */}
          <a
            className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            href="#"
          >
           Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</>
<>
  {/* component */}
  {/* This is an example component */}
  <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
    <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      {/* Tag Discount */}
      <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
        Open
      </div>
      <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500" />
      <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600" />
      <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div className="relative">
          {/* :src="image.largeImageURL"     */}
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
            className="max-h-60 object-cover rounded-t-xl"
            alt=""
          />
          {/* Tag rekomendasi */}
          <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
            Recommended
          </div>
        </div>
        <div className="px-2 py-1">
          {/* Product Title */}
          <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>
          <div className="flex py-2">
            {/* Distance */}
            <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
              0.5 Km
            </div>
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* Rating total */}
                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  4.96
                  {/* Jumlah review */}
                  <span className="text-gray-500 font-normal">
                    (76 rewiews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Tombol pesan */}
          <a
            className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            href="#"
          >
           Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
    <div className='flex flex-col  sm:flex-row'>
    <>
  {/* component */}
  {/* This is an example component */}
  <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
    <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      {/* Tag Discount */}
      <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
        Open
      </div>
      <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500" />
      <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600" />
      <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div className="relative">
          {/* :src="image.largeImageURL"     */}
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
            className="max-h-60 object-cover rounded-t-xl"
            alt=""
          />
          {/* Tag rekomendasi */}
          <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
            Recommended
          </div>
        </div>
        <div className="px-2 py-1">
          {/* Product Title */}
          <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>
          <div className="flex py-2">
            {/* Distance */}
            <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
              0.5 Km
            </div>
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* Rating total */}
                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  4.96
                  {/* Jumlah review */}
                  <span className="text-gray-500 font-normal">
                    (76 rewiews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Tombol pesan */}
          <a
            className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            href="#"
          >
           Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</>
<>
  {/* component */}
  {/* This is an example component */}
  <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
    <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      {/* Tag Discount */}
      <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
        Open
      </div>
      <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500" />
      <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600" />
      <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div className="relative">
          {/* :src="image.largeImageURL"     */}
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
            className="max-h-60 object-cover rounded-t-xl"
            alt=""
          />
          {/* Tag rekomendasi */}
          <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
            Recommended
          </div>
        </div>
        <div className="px-2 py-1">
          {/* Product Title */}
          <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>
          <div className="flex py-2">
            {/* Distance */}
            <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
              0.5 Km
            </div>
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* Rating total */}
                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  4.96
                  {/* Jumlah review */}
                  <span className="text-gray-500 font-normal">
                    (76 rewiews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Tombol pesan */}
          <a
            className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            href="#"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</>
<>
  {/* component */}
  {/* This is an example component */}
  <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
    <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      {/* Tag Discount */}
      <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
        Open
      </div>
      <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500" />
      <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600" />
      <div className="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div className="relative">
          {/* :src="image.largeImageURL"     */}
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
            className="max-h-60 object-cover rounded-t-xl"
            alt=""
          />
          {/* Tag rekomendasi */}
          <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
            Recommended
          </div>
        </div>
        <div className="px-2 py-1">
          {/* Product Title */}
          <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>
          <div className="flex py-2">
            {/* Distance */}
            <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
              0.5 Km
            </div>
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* Rating total */}
                <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  4.96
                  {/* Jumlah review */}
                  <span className="text-gray-500 font-normal">
                    (76 rewiews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Tombol pesan */}
          <a
            className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            href="#"
          >
           Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
    </div>
  )
}

export default ManageBlogs

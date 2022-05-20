import React from 'react'

export default function NavBar() {
  return (
    <div className="mb-2 w-[100%] pb-3 shadow-sm">
      <div className="mx-5 mt-2 flex max-w-6xl cursor-pointer justify-between lg:mx-auto ">
        <div className="ml-5">
          <h1>Your Logo Here</h1>
        </div>
        <div className="mr-5 cursor-pointer rounded-md border border-gray-300 p-[2px] pr-4 pl-4 ease-out">
          <h1>SignOut</h1>
        </div>
      </div>
    </div>
  )
}

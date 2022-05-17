import React from 'react'
import Answer from './Answer'

export default function Answers() {
  return (
    <div className="h-full w-[640px] cursor-pointer rounded-xl  border-2 p-2 pr-8 ">
      <h2 className="m-1 rounded-lg border bg-gray-200 p-3 text-xl">
        Which task do you prefer to do in your free time ?
      </h2>
      <Answer text="This is a long question to test the dynamicity of the component, but it is worked fine Haha ? " />
      <Answer text="Read a book " />
      <Answer text="Watch a movie " />
    </div>
  )
}

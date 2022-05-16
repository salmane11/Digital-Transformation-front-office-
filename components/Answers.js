import React from 'react'
import Answer from './Answer'

export default function Answers() {
  return (
    <div className=" cursor-pointer  rounded-xl border-2 p-1 pr-8 ">
      <h2 className="p-3 text-xl">
        Which task do you prefer to do in your free time ?
      </h2>
      <Answer text="Doing Nothing " />
      <Answer text="Read a book " />
      <Answer text="Watch a movie " />
      <Answer text="Doing sport " />
    </div>
  )
}

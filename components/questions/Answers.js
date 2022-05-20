import React from 'react'
import Answer from './Answer'
import { useState } from 'react'

export default function Answers({ question }) {
  const [selectedResponses, setSelectedResponses] = useState([])
  const checkHandler = (text) => {
    setSelectedResponses((state) => [...state, text])
    console.log(selectedResponses)
  }
  const uncheckHandler = (text) => {
    setSelectedResponses((state) => state.filter((element) => element !== text))
    console.log(selectedResponses)
  }
  return (
    <div className="h-full w-[640px] cursor-pointer rounded-xl  border-2 p-2 pr-8 ">
      <h2 className="m-1 rounded-lg border bg-gray-200 p-3 text-xl">
        {question.question}
      </h2>
      {question.responses.map((response) => (
        <Answer
          isChecked={checkHandler}
          isUnchecked={uncheckHandler}
          key={response.name}
          text={response.name}
        />
      ))}
    </div>
  )
}

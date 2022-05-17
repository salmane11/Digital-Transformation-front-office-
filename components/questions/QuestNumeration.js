import React from 'react'
import QuestionNumber from './QuestionNumber'

export default function QuestNumeration() {
  return (
    <div className="mr-6 grid w-[300px] cursor-pointer grid-cols-4 gap-8  rounded-xl border-2 pt-4 pb-2 pr-8  ">
      <QuestionNumber number="1" />
      <QuestionNumber number="2" />
      <QuestionNumber number="3" />
      <QuestionNumber number="4" />
      <QuestionNumber number="5" />
      <QuestionNumber number="6" />
      <QuestionNumber number="7" />
      <QuestionNumber number="8" />
      <QuestionNumber number="9" />
      <QuestionNumber number="10" />
      <QuestionNumber number="11" />
      <QuestionNumber number="12" />
      <QuestionNumber number="13" />
      <QuestionNumber number="14" />
    </div>
  )
}

import React from 'react'
import QuestionNumber from './QuestionNumber'

export default function QuestNumeration() {
  return (
    <div className="grid cursor-pointer grid-cols-5 gap-4 rounded-xl border-2 p-1 pr-8  ">
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
    </div>
  )
}

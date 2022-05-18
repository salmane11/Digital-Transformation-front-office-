import React from 'react'
import { useState } from 'react'

export default function Answer({ text, isChecked }) {
  // const [checked, setChecked] = useState(false)
  // const checkBoxHandler = () => {
  //   setChecked((value) => !value)
  // }
  // if (checked) {
  //   isChecked(text)
  // }
  return (
    <div className="mb-2 ml-6 space-x-2 rounded-lg bg-gray-50 p-2 text-left text-lg">
      <input type="checkbox" disable name="input" onChange={checkBoxHandler} />
      <label htmlFor="input">{text}</label>
    </div>
  )
}

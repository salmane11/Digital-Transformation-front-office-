import React from 'react'

export default function Answer({ text }) {
  return (
    <div className="mb-2 ml-6 space-x-2 rounded-lg bg-gray-50 p-2 text-left text-lg">
      <input type="checkbox" name="input" />
      <label htmlFor="input">{text}</label>
    </div>
  )
}

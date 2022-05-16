import React from 'react'

export default function Answer({ text }) {
  return (
    <div className="ml-8 space-x-2 p-1 text-left text-lg">
      <input type="checkbox" name="input" />
      <label htmlFor="input">{text}</label>
    </div>
  )
}

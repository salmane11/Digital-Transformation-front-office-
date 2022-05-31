import React from 'react'
import Result from './Result'
import ResultTitle from './ResultTitle'
import Header from '../Header'
import Link from 'next/link'
import Button from '../Button'

export default function CardResult() {
  return (
    <div>
      <Header />
      <div className=" mt-6  cursor-pointer rounded-xl border-2 p-1 pr-8 ">
        <ResultTitle title="Digital" />

        <Result result="Objectif 1" />
        <Result result="Objectif 2" />
        <Result result="Objectif 3" />
      </div>
      <div className="mt-2 flex justify-end">
        <Button link="/digitalaudit" text="Passer à l'audit digital" />
      </div>
    </div>
  )
}

import React from 'react'
import Result from './Result'
import ResultTitle from './ResultTitle'
import Header from '../Header'
import Link from 'next/link'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { getStrategicObjectives } from '../../store/actions/strategicObjectivesAction'

export default function CardResult() {

  // const dispatch = useDispatch()
  const data = useSelector((state) => state.strategicObjectives)
  const { strategicObjectives } = data
  // useEffect(() => {
  //   dispatch(getStrategicObjectives())
  // }, [dispatch])

  return (
    <div>
      <Header />
      <div className=" mt-6  cursor-pointer rounded-xl border-2 p-1 pr-8 ">
        <ResultTitle title="Digital" />
        {strategicObjectives &&
          strategicObjectives.map((element) => <Result result={element} />)}
      </div>
      <div className="mt-2 flex justify-end">
        <Button link="/digitalaudit" text="Passer à l'audit digital" />
      </div>
    </div>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../store/actions/questionAction'
import { useEffect } from 'react'

export default function Questions() {
  const dispatch = useDispatch()
  const questionsData = useSelector((state) => state.questions)
  const { questions } = questionsData

  useEffect(() => {
    dispatch(getQuestions())
  }, [dispatch])

  return (
    <>
      <h3>{JSON.stringify(questions)}</h3>
    </>
  )
}

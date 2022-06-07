import QuestNumeration from '../components/questions/QuestNumeration'
import Answers from '../components/questions/Answers.js'
import Header from '../components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../store/actions/questionAction'
import { addResponse } from '../store/actions/responseAction'

const feed = () => {
  const [selectedResponse, setSelectedResponse] = useState('')
  const [counter, setCounter] = useState(0)

  const dispatch = useDispatch()
  const router = useRouter()
  const counterHandler = () => {
    if (counter === questions.length-1) {
      router.push("/objectivesresults")
    }
    if (selectedResponse) {
      dispatch(
        addResponse({
          question: questions[counter].question,
          response: {
            name: selectedResponse,
            score: questions[counter].responses.filter(
              (response) => response.name === selectedResponse
            )[0].score,
          },
          objective: questions[counter].objective,
          percentage: questions[counter].percentage,
        })
      )
      setCounter(counter + 1)
    }
  }

  const answerHandler = (answer) => {
    setSelectedResponse(answer[0])
  }

  const questionsData = useSelector((state) => state.questions)
  const { questions } = questionsData

  useEffect(() => {
    dispatch(getQuestions())
  }, [dispatch])

  return (
    <div className="g-6 flex h-full flex-col items-center justify-center">
      <Header audit="Audit Stratégique"/>
      <div className="mt-6 flex  justify-between ">
        <div className="flex-[0.3] ">
          <QuestNumeration counter={counter} size={questions.length} />
        </div>
        <div className="flex-[0.64]">
          <Answers
            selectedAnswer={answerHandler}
            question={questions[counter]}
            counter={counter}
          />
        </div>
      </div>
      <div className="ml-30 mt-3 flex space-x-2 pl-96">
        <Button text="Next" onClick={counterHandler} />
      </div>
    </div>
  )
}
export default feed

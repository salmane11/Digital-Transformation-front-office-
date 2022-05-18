import QuestNumeration from '../components/questions/QuestNumeration'
import Answers from '../components/questions/Answers.js'
import Header from '../components/Header'
import Link from 'next/link'
import Button from '../components/Button'
import {useState} from "react"

const feed = () => {
  const [counter,setCounter]=useState(0);
  const questions = [
    {
      question: 'question 1',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
    {
      question: 'question 2',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
    {
      question: 'question 3',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
    {
      question: 'question 4',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
  ]

  const counterHandler=()=>{
    if(counter===questions.length-1){
      console.log("length max");
      return;
    }
    setCounter(counter+1);
    console.log(counter)
  }

  return (
    <div className="g-6 flex h-full flex-col items-center justify-center">
      <Header />
      <div className="mt-6 flex  justify-between ">
        <div className="flex-[0.3] ">
          <QuestNumeration counter={counter} size={questions.length}/>
        </div>
        <div className="flex-[0.64]">
          <Answers question={questions[counter]}/>
        </div>
      </div>
      <div className="ml-60 mt-3 flex space-x-2 pl-96">
        <Button text="Next" onClick={counterHandler} />
        <Button text="Passer à l'audit digital" link="/initiatives" />
      </div>
    </div>
  )
}
export default feed

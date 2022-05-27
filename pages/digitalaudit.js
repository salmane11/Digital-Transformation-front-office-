import Axes from '../components/digitalQuestions/Axes.js'
import QuestNumeration from '../components/questions/QuestNumeration.js'
import Answers from '../components/questions/Answers.js'
import Button from '../components/Button'
import { useState } from 'react'

function digitalaudit() {
  const digitalQuestions = [
    {
      question: 'axis 1',
      level: 1,
      responses: [
        {
          name: 'response 1 level1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 1',
      level: 2,
      responses: [
        {
          name: 'response 1level2',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 1',
      level: 3,
      responses: [
        {
          name: 'response 1 level3',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 1',
      level: 4,
      responses: [
        {
          name: 'response 1 level4',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 1',
      level: 5,
      responses: [
        {
          name: 'response 1 level5',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 2',
      level: 1,
      responses: [
        {
          name: 'response 1l',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 2',
      level: 2,
      responses: [
        {
          name: 'response 1l',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 2',
      level: 3,
      responses: [
        {
          name: 'response 1l',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 2',
      level: 4,
      responses: [
        {
          name: 'response 1l',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 2',
      level: 5,
      responses: [
        {
          name: 'response 1l',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 3',
      level: 1,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 3',
      level: 2,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 3',
      level: 3,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 3',
      level: 4,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 3',
      level: 5,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 4',
      level: 1,
      responses: [
        {
          name: 'response 1 level1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 4',
      level: 2,
      responses: [
        {
          name: 'response 1level2',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 4',
      level: 3,
      responses: [
        {
          name: 'response 1 level3',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 4',
      level: 4,
      responses: [
        {
          name: 'response 1 level4',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 4',
      level: 5,
      responses: [
        {
          name: 'response 1 level5',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 5',
      level: 1,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 5',
      level: 2,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 5',
      level: 3,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 5',
      level: 4,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
    {
      question: 'axis 5',
      level: 5,
      responses: [
        {
          name: 'response 1',
        },
        {
          name: 'response 2',
        },
        {
          name: 'response 3',
        },
      ],
    },
  ]
  const axes = [
    { axisId: 1, axisName: 'G & L' },
    { axisId: 2, axisName: 'P & C' },
    { axisId: 3, axisName: 'C & C' },
    { axisId: 4, axisName: 'Innovation' },
    { axisId: 5, axisName: 'Technology' },
  ]

  const [levelsCounter, setLevelsCounter] = useState(0)
  const [axesCounter, setAxesCounter] = useState(0)
  const [questionsCounter, setQuestionsCounter] = useState(0)

  //a list that stores the answers on each level
  const [selectedAnswers, setSelectedAnswers] = useState([])

  //a list that stores the count of answer on each level
  const [answersCounter, setAnswersCounter] = useState([])

  //a list that stores every axis' level
  const [axisLevel, setAxisLevel] = useState([])

  // a function that come up with the selected answers from the child Component Answers
  const answersHandler = (answers) => {
    setSelectedAnswers(answers)
    console.log(answers)
  }

  /**
   * on every click on the next button we increment the levels counter.
   * if the levels' counter is 5 then we increment the axis' counter
   * on every level we count the number of selected answers and push the count to answersCounter
   **/
  const counterHandler = () => {
    let levels = []
    for (let i = 0; i < 5; i++) {
      let level = ''
      switch (i) {
        case 0:
          level = 'level1'
          break
        case 1:
          level = 'level2'
          break
        case 2:
          level = 'level3'
          break
        case 3:
          level = 'level4'
          break
        case 4:
          level = 'level5'
          break
      }
      for (let j = 0; j < answersCounter[i]; j++) {
        levels.push(level)
      }
    }

    if (levelsCounter === 5) {
      setAxisLevel((state) => [
        ...state,
        {
          axisId: axes[axesCounter].axisId,
          levels: levels,
        },
      ])
      setAxesCounter(axesCounter + 1)
      setLevelsCounter(0)
      setAnswersCounter([])
      return
    }
    if (axesCounter === axes.length) {
      console.log(axisLevel)
      //the digital audit is finished redirect to result
      return
    }
    setAnswersCounter((state) => [...state, selectedAnswers.length])
    setLevelsCounter((state) => state + 1)
    setQuestionsCounter(questionsCounter + 1)
    console.log('these are the answers checked on every level ', [
      ...answersCounter,
      selectedAnswers.length,
    ])
  }

  return (
    <div className="align-center flex w-full justify-between ">
      <div className="m-2 w-1/3 p-2">
        <Axes axes={axes} axisCounter={axesCounter} />
        <QuestNumeration className="w-full" counter={levelsCounter} size={5} />
      </div>
      <div className="w-2/3">
        <Answers
          selectedAnswer={answersHandler}
          question={digitalQuestions[questionsCounter]}
          counter={questionsCounter}
        />
        <div className="ml-60 mt-3 flex space-x-2 pl-96">
          <Button text="Next" onClick={counterHandler} />
          <Button text="See Results" link="/initiatives" />
        </div>
      </div>
    </div>
  )
}
export default digitalaudit

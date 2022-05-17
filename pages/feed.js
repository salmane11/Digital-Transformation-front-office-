import QuestNumeration from '../components/QuestNumeration'
import Answers from '../components/Answers.js'
import Header from '../components/Header'
import Link from 'next/link'
import Button from '../components/Button'

const feed = () => {
  return (
    <div className="g-6 flex h-full flex-col items-center justify-center">
      <Header />
      <div className="mt-6 flex  justify-between ">
        <div className="flex-[0.3] ">
          <QuestNumeration />
        </div>
        <div className="flex-[0.64]">
          <Answers />
        </div>
      </div>
      <div className="ml-60 mt-3 flex space-x-2 pl-96">
        <Button text="Next" />
        <Button text="Passer à l'audit digital" />
      </div>
    </div>
  )
}
export default feed

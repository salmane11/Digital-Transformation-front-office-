import QuestNumeration from '../components/QuestNumeration'
import Answers from '../components/Answers.js'
import Header from '../components/Header'

const feed = () => {
  return (
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
      <Header />
      <div className=" mt-6 grid w-4/6 grid-cols-4 gap-80 space-x-3">
        <div className="z-20  w-[290px]">
          <QuestNumeration />
        </div>
        <div className="col-span-3 ">
          <Answers />
        </div>
      </div>
    </div>
  )
}
export default feed

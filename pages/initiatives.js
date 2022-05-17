import MyRadar from '../components/finalResults/MyRadar.js'
import Initiatives from '../components/finalResults/Initiatives.js'
import Header from '../components/Header.js'

function initiatives() {
  return (
    <div className="flex flex-col h-full items-center justify-center ">
      <Header />
      <div className="shadow-2xl border-2 rounded-lg p-4 mt-10 w-3/5 flex flex-wrap justify-between">
        <MyRadar />
        <Initiatives />
      </div>
    </div>
  )
}
export default initiatives

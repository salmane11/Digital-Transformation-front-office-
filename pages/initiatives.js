import MyRadar from '../components/finalResults/MyRadar.js'
import Initiatives from '../components/finalResults/Initiatives.js'
import Header from '../components/Header.js'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMaturityLevels } from '../store/actions/maturityLevelsAction'

function initiatives() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.maturityLevels)
  const { maturityLevels } = data
  console.log(maturityLevels)

  useEffect(() => {
    dispatch(getMaturityLevels())
  }, [dispatch])

  return (
    <div className="flex h-full flex-col items-center justify-center ">
      <Header />
      <div className="mt-10 flex w-3/5 flex-wrap justify-between rounded-lg border-2 p-4 shadow-2xl">
        {maturityLevels.length!==0 && <MyRadar data={maturityLevels}/>}
        <Initiatives />
      </div>
    </div>
  )
}
export default initiatives

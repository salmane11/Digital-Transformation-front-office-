import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function MyRadar({ data }) {
  const AxesData = useSelector((state) => state.digitalAxes)
  const { digitalAxes } = AxesData

  const [myData, setMyData] = useState([])

  useEffect(() => {
    let maturity = []
    for (let key in data) {
      maturity.push({
        subject: digitalAxes
          ? digitalAxes.filter((element) => element._id === data[key].axe_id)[0]
              .name
          : data[key].axe_id,
        A: data[key].level * 30,
        B:
          data[key].level < 5
            ? (data[key].level + 1) * 30
            : data[key].level * 30,
        fullMark: 150,
      })
    }
    setMyData(maturity)
  }, [data])

  return (
    <RadarChart outerRadius={150} width={600} height={400} data={myData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name="now"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="later"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  )
}
export default MyRadar

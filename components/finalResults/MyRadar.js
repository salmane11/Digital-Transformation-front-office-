import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts'
import {useState, useEffect} from "react"

function MyRadar({ data }) {

  const [myData, setMyData] = useState([])

  useEffect(() => {
    let maturity = []
    for (let key in data) {
      maturity.push({
        subject: data[key].axe_id,
        A: data[key].level,
        fullMark: 5,
      })
    }
    setMyData(maturity)
  }, [data])
  
  return (
    <RadarChart outerRadius={150} width={600} height={400} data={myData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name="maturity levels"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  )
}
export default MyRadar

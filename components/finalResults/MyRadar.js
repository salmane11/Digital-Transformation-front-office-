import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts'

function MyRadar() {
  const myData = [
    {
      subject: 'Technology',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Innovation',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Capacity and capability',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'People and culture',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Governance and leadership',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ]
  return (
    <RadarChart outerRadius={150} width={600} height={400} data={myData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name="Now"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Later"
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

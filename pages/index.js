import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Login from '../components/Login'
import CardResult from '../components/results/CardResult'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Head>
        <title>Projet PFA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardResult />
    </div>
  )
}

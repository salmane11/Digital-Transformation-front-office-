import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Questions from '../components/Questions'
import Login from '../components/Login'
import NavBar from '../components/navbar/NavBar'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Head>
        <title>Projet PFA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>{' '}
      <NavBar />
      {/* <Questions /> */}
      <Login />
    </div>
  )
}

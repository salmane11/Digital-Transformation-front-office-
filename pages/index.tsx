import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Login from '../components/Login'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Head>
        <title>Projet PFA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Login />

    </div>
  )
}

export default Home

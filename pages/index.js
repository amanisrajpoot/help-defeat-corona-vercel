import Head from 'next/head'
import { Navbar } from './components/Navbar'
import { SelfTest } from './components/SelfTest'
import { Sidebar } from './components/Sidebar'

export default function Home() {
  return (
    <div className="font:roboto">
      <Head>
        <title>HelpDefeatCorona.org</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className="flex">
        <Sidebar></Sidebar>
        <SelfTest></SelfTest>
      </div>
      
    </div>
  )
}

import Head from 'next/head'
import Layout from '../components/layout'
import Hero from "../components/home/hero"


export default function Home() {
  return (
    <Layout>

      <Head>
        <title>AuraPostProduction</title>
        <meta name="description" content="AuraPostProduction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Hero />
      </div>


    </Layout>
  )
}

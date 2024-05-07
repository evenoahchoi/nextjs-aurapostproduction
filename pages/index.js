import Head from 'next/head'
import Layout from '../components/layout'
import Hero from "../components/home/hero"


export default function Home() {
  return (
    <Layout>

      <Head>
        <title>아우라포스트프로덕션</title>
        <meta name="description" content="아우라는 영상 기반으로 최상의 그래픽 서비스를 제공하는 후반전문업체입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Hero />
      </div>


    </Layout>
  )
}

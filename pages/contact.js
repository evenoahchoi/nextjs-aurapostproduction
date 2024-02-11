import Layout from "../components/layout";
import Head from "next/head";
import Image from 'next/image';

export default function Contact() {
    return(
        <Layout>
            <Head>
                <title>AuraPostProduction</title>
                <meta name="description" content="AuraPostProduction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 mb-6 sm:mb-0 flex items-end justify-center relative border border-gray-200">
                        <a href="https://map.naver.com/p/entry/place/1931445564?c=17.07,0,0,0,dh" target="_blank" rel="noopener noreferrer">
                            <Image src="/map.png" alt="지도1" width={700} height={700} priority={true}/>
                        </a>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center">
                        <Image src="/map_2.jpg" alt="지도2" width={700} height={700} priority={true}/>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

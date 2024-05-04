import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

export default function ProjectPage() {
    const router = useRouter();
    const { projectId, title, youtube, description } = router.query;

    return (
        <Layout>
            <Head>
                <title>AuraPostProduction</title>
                <meta name="description" content="AuraPostProduction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 mb-6 sm:mb-0 flex items-end justify-center relative border border-gray-200">
                        <ReactPlayer
                        url={youtube}
                        controls={true}
                        width="100%"
                        height={400}
                        />
                    </div>
                    <div className="p-1 flex flex-col">
                        <h1 className="text-md font-bold text-gray-800 overflow-hidden overflow-ellipsis">{title}</h1>
                        <h3 className="mt-4 text-mid text-gray-800">{description}</h3>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

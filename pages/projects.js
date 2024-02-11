import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {

    return (
        <Layout>
            <Head>
                <title>AuraPostProduction</title>
                <meta name="description" content="AuraPostProduction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-3xl m-4 font-bold sm:text-3xl">WORK</h1>
                <div className="flex flex-col items-center min-h-screen mb-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 py-5 m-2 gap-4 w-full">
                        {projects.results.map((aProject, index) => (
                            <ProjectItem key={aProject.id} data={aProject} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            filter: {
                property: 'Tags', // 태그 속성 필터링
                multi_select: {
                    contains: 'Work' // SHOWREEL 태그를 가진 데이터 필터링
                }
            },
            sorts: [
                {
                    "property": "Date",
                    "direction": "descending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    return {
        props: { projects },
    }
}

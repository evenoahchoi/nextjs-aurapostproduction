import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import { useState } from 'react';

export default function Projects({ projects }) {

    return (
        <Layout>
            <Head>
                <title>AuraPostProduction</title>
                <meta name="description" content="AuraPostProduction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-3xl m-4 font-bold sm:text-3xl">WORKS</h1>
                <div className="flex flex-col items-center min-h-screen mb-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 py-5 m-2 gap-4 w-full">
                        {projects.results.map((aProject, index) => (
                            <ProjectItemWithHover key={aProject.id} data={aProject} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function ProjectItemWithHover({ data }) {
    const [showTitle, setShowTitle] = useState(false);

    return (
        <div
            className="project-item"
            onMouseEnter={() => setShowTitle(true)}
            onMouseLeave={() => setShowTitle(false)}
        >
            <ProjectItem data={data} />
            {showTitle && <div className="title">{data.properties.Name.title[0]?.plain_text || ''}</div>}
            <style jsx>{`
                .project-item {
                    position: relative;
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 5px;
                    text-align: center;
                    transition: opacity 0.3s ease;
                    opacity: ${showTitle ? '1' : '0'};
                }
            `}</style>
        </div>
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
                    contains: 'Work' // WORK 태그를 가진 데이터 필터링
                }
            },
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending'
                }
            ],
            page_size: 500
        })
    };

    let projects = [];
    let hasMore = true;
    let startCursor = undefined;

    while (hasMore) {
        if (startCursor) {
            options.body = JSON.stringify({
                ...JSON.parse(options.body),
                start_cursor: startCursor
            });
        }

        const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
        const data = await res.json();
        projects = projects.concat(data.results);

        hasMore = data.has_more;
        startCursor = data.next_cursor;
    }

    return {
        props: { projects: { results: projects } },
    };
}
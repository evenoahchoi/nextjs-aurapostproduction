import Layout from "../components/layout";
import Head from "next/head";
import { MongoClient } from "mongodb";
import ProjectItem from "../components/projects/project-item";
import { useState } from 'react';

export default function Showreel({ projects }) {
    // Work 태그를 가진 프로젝트만 필터링
    const filteredProjects = projects.filter((project) =>
        project.properties.Tags.multi_select.some(tag => tag.name === 'Work')
    );

    return (
        <Layout>
            <Head>
                <title>WORK</title>
                <meta name="description" content="SHOWREEL" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-3xl m-4 font-bold sm:text-3xl">WORK</h1>
                <div className="flex flex-col items-center min-h-screen mb-5 font-bold">
                    {/* 프로젝트 목록 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 py-10 m-4 gap-4 w-full">
                        {filteredProjects.map((aProject) => (
                            <ProjectItemWithHover key={aProject._id} data={aProject} />
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .tag-button {
                    padding: 8px 12px;
                    font-size: 16px;
                    color: black;
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                }
                .tag-button.selected {
                    color: red;
                }
                .tag-button:hover {
                    color: red;
                }
            `}</style>
        </Layout>
    );
}

// 마우스 오버에 반응하여 title이 나타나는 ProjectItem 컴포넌트
function ProjectItemWithHover({ data }) {
    const [showTitle, setShowTitle] = useState(false);

    return (
        <div
            className="project-item"
            onMouseEnter={() => setShowTitle(true)}
            onMouseLeave={() => setShowTitle(false)}
        >
            <ProjectItem data={data} />
            {showTitle && <div className="title">{data.properties.Name.title[0]?.plain_text || 'No Title'}</div>}
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
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("projects");  // DB 이름: projects
    const collection = db.collection("post");  // 컬렉션 이름: post

    // Work 태그가 있는 프로젝트만 조회하고 최신순으로 정렬
    const projects = await collection
        .find({ "properties.Tags.multi_select.name": "Work" })
        .sort({ 'properties.Date.date.start': -1 })
        .toArray();

    client.close();

    return {
        props: { projects: JSON.parse(JSON.stringify(projects)) },
    };
}

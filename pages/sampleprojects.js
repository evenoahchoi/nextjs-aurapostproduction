import Layout from "../components/layout";
import Head from "next/head";
import { MongoClient } from "mongodb";
import ProjectItem from "../components/projects/project-item";
import { useState } from 'react';
import { useRouter } from 'next/router'; // useRouter 가져오기

export default function Projects({ projects }) {
    return (
        <Layout>
            <Head>
                <title>WORKS</title>
                <meta name="description" content="WORKS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-3xl m-4 font-bold sm:text-3xl">WORKS</h1>
                <div className="flex flex-col items-center min-h-screen mb-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 py-5 m-2 gap-4 w-full">
                        {projects.map((aProject) => (
                            <ProjectItemWithHover key={aProject._id} data={aProject} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function ProjectItemWithHover({ data }) {
    const [showTitle, setShowTitle] = useState(false);
    const router = useRouter(); // useRouter 훅 사용

    // 데이터에서 제목을 가져오는 방법 수정
    const title = data.title || data.properties?.Name?.title[0]?.plain_text || 'No Title'; // 기본값 추가

    const handleClick = () => {
        router.push(`/projects/${data._id}`); // 클릭 시 이동할 URL 지정
    };

    return (
        <div
            className="project-item"
            onMouseEnter={() => setShowTitle(true)}
            onMouseLeave={() => setShowTitle(false)}
            onClick={handleClick} // 클릭 이벤트 추가
            style={{ cursor: 'pointer' }} // 커서 변경
        >
            <ProjectItem data={data} />
            {showTitle && <div className="title">{title}</div>}
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

    const projects = await collection.find({}).sort({ Date: -1 }).toArray(); // 정렬: 최신순

    client.close();

    return {
        props: { projects: JSON.parse(JSON.stringify(projects)) },
    };
}

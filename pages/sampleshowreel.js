import Layout from "../components/layout";
import Head from "next/head";
import { MongoClient } from "mongodb";
import ProjectItem from "../components/projects/project-item";
import { useState } from 'react';

export default function Showreel({ projects }) {
    const [selectedTag, setSelectedTag] = useState('SHOWREEL'); // 기본값을 SHOWREEL로 설정

    const handleTagChange = (tag) => {
        setSelectedTag(tag);
    };

    // 선택한 태그에 따라 필터링된 프로젝트 목록 생성
    const filteredProjects = selectedTag === 'ALL'
        ? projects // 모든 프로젝트를 보여줌
        : projects.filter((project) =>
            project.tag1 === selectedTag || project.tag2 === selectedTag
        );

    return (
        <Layout>
            <Head>
                <title>SHOWREEL</title>
                <meta name="description" content="SHOWREEL" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-3xl m-4 font-bold sm:text-3xl">SHOWREEL</h1>
                <div className="flex flex-col items-center min-h-screen mb-5 font-bold">
                    {/* 태그 선택 메뉴 */}
                    <div className="mb-1 flex gap-4">
                        <button
                            onClick={() => handleTagChange('SHOWREEL')}
                            className={`tag-button ${selectedTag === 'SHOWREEL' ? 'selected' : ''}`}
                        >
                            ALL
                        </button>
                        <button
                            onClick={() => handleTagChange('2D')}
                            className={`tag-button ${selectedTag === '2D' ? 'selected' : ''}`}
                        >
                            2D
                        </button>
                        <button
                            onClick={() => handleTagChange('EDIT')}
                            className={`tag-button ${selectedTag === 'EDIT' ? 'selected' : ''}`}
                        >
                            EDIT
                        </button>
                        <button
                            onClick={() => handleTagChange('COLOR')}
                            className={`tag-button ${selectedTag === 'COLOR' ? 'selected' : ''}`}
                        >
                            COLOR
                        </button>
                    </div>

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
            {showTitle && <div className="title">{data.title || 'No Title'}</div>}
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
    const db = client.db("projectstest");  // DB 이름: projects
    const collection = db.collection("posttest2");  // 컬렉션 이름: post

    // MongoDB에서 모든 프로젝트를 가져오고 최신순으로 정렬
    const projects = await collection.find({}).sort({ date: -1 }).toArray(); // 'date' 필드를 기준으로 최신순

    client.close();

    return {
        props: { projects: JSON.parse(JSON.stringify(projects)) },
    };
}

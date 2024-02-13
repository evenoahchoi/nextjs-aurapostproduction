import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import { useState } from 'react';

export default function Showreel({ projects }) {
    const [selectedTag, setSelectedTag] = useState('ALL'); // 기본값은 'ALL'

    const handleTagChange = (tag) => {
        setSelectedTag(tag);
    };

    // 선택한 태그에 따라 필터링된 프로젝트 목록 생성
    const filteredProjects = selectedTag === 'ALL'
        ? projects.results
        : projects.results.filter((project) =>
            project.properties.Tags.multi_select.some(tag => tag.name === selectedTag)
        );

    return (
        <Layout>
            <Head>
                <title>AuraPostProduction</title>
                <meta name="description" content="AuraPostProduction" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-3xl m-4 font-bold sm:text-3xl">SHOWREEL</h1>
                <div className="flex flex-col items-center min-h-screen mb-5 font-bold">
                    {/* 태그 선택 메뉴 */}
                    <div className="mb-1 flex gap-4">
                        <button
                            onClick={() => handleTagChange('ALL')}
                            className={`tag-button ${selectedTag === 'ALL' ? 'selected' : ''}`}
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
                        {filteredProjects.map((aProject, index) => (
                            <ProjectItemWithHover key={aProject.id} data={aProject} />
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
            {showTitle && <div className="title">{data.properties.Name.title[0].plain_text}</div>}
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
                    contains: 'SHOWREEL' // SHOWREEL 태그를 가진 데이터 필터링
                }
            },
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending'
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const projects = await res.json();

    return {
        props: { projects },
    };
}
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Layout from '../components/layout';

export default function AdminPage({ projects }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const loginTime = localStorage.getItem('loginTime');
        
        // 인증 상태 및 로그인 시간 확인
        if (!isAuthenticated || !loginTime) {
            router.push('/login');
            return; // 추가적인 로직 실행 방지
        }
        
        const currentTime = Date.now();
        const elapsedTime = currentTime - loginTime; // 경과 시간 (밀리초)

        // 10분(600,000ms) 초과 시 로그아웃
        if (elapsedTime > 3600000) {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('loginTime');
            router.push('/login');
            return; // 추가적인 로직 실행 방지
        }

        setLoading(false); // 인증된 경우 로딩 상태를 false로 변경
    }, [router]);

    const handleLogout = () => {
        // 로그아웃 시 localStorage에서 인증 정보 삭제
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loginTime'); // 로그인 시간도 삭제
        router.push('/login'); // 로그인 페이지로 이동
    };

    // 로딩 중이면 아무것도 보여주지 않음
    if (loading) {
        return null; // 또는 <div>Loading...</div> 같은 간단한 로딩 컴포넌트를 사용할 수 있음
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">관리자 화면</h1>
                    {/* 로그아웃 버튼 */}
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        로그아웃
                    </button>
                </div>

                {/* 새로운 프로젝트 추가 버튼 */}
                <div className="mb-4">
                    <button 
                        onClick={() => router.push('/create')} // 새로운 데이터 생성 페이지로 이동
                        className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded hover:opacity-90 transition duration-200"
                    >
                        새로운 작업물 추가
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Link key={project._id} href={`/edit/${project._id}`} passHref>
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                <div className="relative w-full h-56">
                                    <Image
                                        src={project.imgSrc || '/default-image.jpg'}
                                        alt="Project Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:opacity-90 transition-opacity duration-300"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <span className="block text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                                        {project.title || 'No Title'}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .container {
                    max-width: 1200px;
                }
            `}</style>
        </Layout>
    );
}

export async function getServerSideProps() {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("projectstest");
    const collection = db.collection("posttest2");

    const projects = await collection.find({}).sort({ date: -1 }).toArray();
    client.close();

    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects)),
        },
    };
}

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Layout from '../components/layout';

export default function AdminPage({ projects, visitors }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const loginTime = localStorage.getItem('loginTime');

        if (!isAuthenticated || !loginTime) {
            router.push('/login');
            return;
        }

        const currentTime = Date.now();
        const elapsedTime = currentTime - loginTime;

        if (elapsedTime > 3600000) {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('loginTime');
            router.push('/login');
            return;
        }

        setLoading(false);
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loginTime');
        router.push('/login');
    };

    if (loading) {
        return null;
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">관리자 화면</h1>
                    <div className="flex items-center space-x-8">
                        <div className="text-center">
                            <p className="text-lg font-semibold">일일 방문자 : {visitors.daily}명</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-semibold">월간 방문자 : {visitors.monthly}명</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-semibold">총 방문자 : {visitors.total}명</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        로그아웃
                    </button>
                </div>

                <div className="mb-4">
                    <button 
                        onClick={() => router.push('/create')}
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

    const projectsCollection = db.collection("posttest2");
    const projects = await projectsCollection.find({}).sort({ date: -1 }).toArray();

    const visitorsCollection = db.collection("visitors");
    const totalVisitor = await visitorsCollection.findOne({ type: 'total' });
    const monthlyVisitor = await visitorsCollection.findOne({ type: 'monthly', month: `${new Date().getFullYear()}-${new Date().getMonth() + 1}` });
    const dailyVisitor = await visitorsCollection.findOne({ type: 'daily', day: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}` });

    client.close();

    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects)),
            visitors: {
                total: totalVisitor?.count || 0,
                monthly: monthlyVisitor?.count || 0,
                daily: dailyVisitor?.count || 0
            }
        },
    };
}

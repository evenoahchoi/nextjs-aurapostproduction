// pages/edit/[editId].js

import { useState } from 'react';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function EditProject({ project }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: project.title || '',
        youtube: project.youtube || '',
        description: ['DI (Color) – AURA_postproduction', '2D – AURA_postproduction', 'DI (Color) – AURA_postproduction / 2D – AURA_postproduction'].includes(project.description)
            ? project.description
            : 'custom',
        customDescription: ['DI (Color) – AURA_postproduction', '2D – AURA_postproduction', 'DI (Color) – AURA_postproduction / 2D – AURA_postproduction'].includes(project.description)
            ? ''
            : project.description,  // 직접 입력된 설명 값을 customDescription에 불러오기
        imgSrc: project.imgSrc || '',
        tag1: project.tag1 || '',
        tag2: project.tag2 || '',
        date: project.date ? new Date(project.date) : new Date(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({ ...prevData, date }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const descriptionToSave = formData.description === 'custom' ? formData.customDescription : formData.description;
    
        const res = await fetch(`/api/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: project._id,
                ...formData,
                description: descriptionToSave, // customDescription이 선택된 경우 그 값이 저장됨
                date: formData.date.toISOString(),
            }),
        });
    
        if (res.ok) {
            router.push('/admin');
        } else {
            console.error('Failed to update the project.');
        }
    };

    const handleDelete = async () => {
        const confirmDelete = confirm('정말로 이 프로젝트를 삭제하시겠습니까?');

        if (confirmDelete) {
            const res = await fetch(`/api/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: project._id }),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                console.error('Failed to delete the project.');
            }
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-black-600">세부 수정</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">제목</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">영상 URL</label>
                        <input
                            type="url"
                            name="youtube"
                            value={formData.youtube}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">설명</label>
                        <select
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        >
                            <option value="" disabled>설명 선택</option>
                            <option value="DI (Color) – AURA_postproduction">DI (Color) – AURA_postproduction</option>
                            <option value="2D – AURA_postproduction">2D – AURA_postproduction</option>
                            <option value="DI (Color) – AURA_postproduction / 2D – AURA_postproduction">DI (Color) – AURA_postproduction / 2D – AURA_postproduction</option>
                            <option value="custom">직접 입력</option>
                        </select>
                        
                        {formData.description === 'custom' && (
                            <div className="mt-2">
                                <label className="block text-sm font-medium text-gray-700">직접 입력</label>
                                <input
                                    type="text"
                                    name="customDescription"
                                    value={formData.customDescription}
                                    onChange={handleChange}
                                    placeholder="설명을 직접 입력하세요"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                />
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">이미지 링크</label>
                        <input
                            type="url"
                            name="imgSrc"
                            value={formData.imgSrc}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tag 1</label>
                        <select
                            name="tag1"
                            value={formData.tag1}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        >
                            <option value="" disabled>Tag 선택</option>
                            <option value="Work">Work</option>
                            <option value="SHOWREEL">Showreel</option>
                        </select>
                    </div>
                    {formData.tag1 === 'SHOWREEL' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tag 2</label>
                            <select
                                name="tag2"
                                value={formData.tag2}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                required
                            >
                                <option value="" disabled>Tag 2 선택</option>
                                <option value="2D">2D</option>
                                <option value="EDIT">EDIT</option>
                                <option value="COLOR">COLOR</option>
                            </select>
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">날짜 및 시간</label>
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            showTimeSelect
                            dateFormat="Pp"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200">
                            저장
                        </button>
                        <button onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-200">
                            삭제
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

// 서버 측에서 MongoDB 연결 설정
export async function getServerSideProps(context) {
    const { MongoClient, ObjectId } = await import('mongodb');  // 조건부 import
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("projectstest");
    const collection = db.collection("posttest2");

    const { editId } = context.query;

    if (!ObjectId.isValid(editId)) {
        return { notFound: true };
    }

    try {
        const project = await collection.findOne({ _id: new ObjectId(editId) });

        if (!project) {
            return { notFound: true };
        }

        return {
            props: {
                project: JSON.parse(JSON.stringify(project)),
            },
        };
    } catch (error) {
        console.error('Error fetching project:', error);
        return { notFound: true };
    } finally {
        client.close();
    }
}

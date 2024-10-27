import { MongoClient, ObjectId } from 'mongodb';
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
        description: project.description || '',
        imgSrc: project.imgSrc || '',
        tag1: project.tag1 || '',
        tag2: project.tag2 || '',
        date: project.date ? new Date(project.date) : new Date(), // 날짜 기본값 설정
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Tag1이 변경될 때 Tag2를 초기화
        if (name === 'tag1' && value !== 'Showreel') {
            setFormData((prevData) => ({ ...prevData, tag2: '' }));
        }
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({ ...prevData, date }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`/api/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: project._id, ...formData, date: formData.date.toISOString() }),
        });

        if (res.ok) {
            router.push('/admin'); // 수정 후 Admin 페이지로 이동
        } else {
            console.error('Failed to update the project.');
        }
    };

    // 삭제 처리 함수
    const handleDelete = async () => {
        const confirmDelete = confirm('정말로 이 프로젝트를 삭제하시겠습니까?'); // 확인 메시지

        if (confirmDelete) {
            const res = await fetch(`/api/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: project._id }), // 삭제할 프로젝트 ID
            });

            if (res.ok) {
                router.push('/admin'); // 삭제 후 Admin 페이지로 이동
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
                            required
                        >
                            <option value="" disabled>설명 선택</option>
                            <option value="DI (Color) – AURA_postproduction">DI (Color) – AURA_postproduction</option>
                            <option value="2D – AURA_postproduction">2D – AURA_postproduction</option>
                            <option value="DI (Color) – AURA_postproduction / 2D – AURA_postproduction">DI (Color) – AURA_postproduction / 2D – AURA_postproduction</option>
                        </select>
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
                            <option value="Showreel">Showreel</option>
                        </select>
                    </div>
                    {formData.tag1 === 'Showreel' && (
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

export async function getServerSideProps(context) {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("projectstest");
    const collection = db.collection("posttest2");

    const { editId } = context.query;

    // ObjectId 유효성 검사
    if (!ObjectId.isValid(editId)) {
        return { notFound: true }; // 유효하지 않은 ObjectId일 경우 404 페이지로 이동
    }

    try {
        const project = await collection.findOne({ _id: new ObjectId(editId) });

        if (!project) {
            return {
                notFound: true, // 프로젝트가 없을 경우 404 페이지로 이동
            };
        }

        return {
            props: {
                project: JSON.parse(JSON.stringify(project)),
            },
        };
    } catch (error) {
        console.error('Error fetching project:', error);
        return {
            notFound: true, // 오류 발생 시 404 페이지로 이동
        };
    } finally {
        client.close();
    }
}

import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function CreatePage() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [youtube, setYoutube] = useState('');
    const [description, setDescription] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [date] = useState(new Date()); // 현재 날짜를 상태로 설정

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title,
                youtube,
                description,
                imgSrc,
                tag1,
                tag2,
                date: date.toISOString() // 날짜를 ISO 문자열로 전송
            }),
        });

        if (res.ok) {
            router.push('/admin'); // 성공 시 관리자 페이지로 리디렉션
        } else {
            const errorData = await res.json();
            console.error('Failed to add project:', errorData.message); // 에러 메시지 출력
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">새로운 작업물 추가</h1>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">제목</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">유튜브 URL</label>
                        <input
                            type="text"
                            value={youtube}
                            onChange={(e) => setYoutube(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">설명</label>
                        <select
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="" disabled>설명 선택</option>
                            <option value="DI (Color) – AURA_postproduction">DI (Color) – AURA_postproduction</option>
                            <option value="2D – AURA_postproduction">2D – AURA_postproduction</option>
                            <option value="DI (Color) – AURA_postproduction / 2D – AURA_postproduction">DI (Color) – AURA_postproduction / 2D – AURA_postproduction</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">이미지 URL</label>
                        <input
                            type="text"
                            value={imgSrc}
                            onChange={(e) => setImgSrc(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tag 1</label>
                        <select
                            value={tag1}
                            onChange={(e) => setTag1(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="" disabled>Tag 선택</option>
                            <option value="Work">Work</option>
                            <option value="Showreel">Showreel</option>
                        </select>
                    </div>
                    {tag1 === 'Showreel' && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Tag 2</label>
                            <select
                                value={tag2}
                                onChange={(e) => setTag2(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                required
                            >
                                <option value="" disabled>Tag 2 선택</option>
                                <option value="2D">2D</option>
                                <option value="EDIT">EDIT</option>
                                <option value="COLOR">COLOR</option>
                            </select>
                        </div>
                    )}
                    <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200">
                        추가하기
                    </button>
                </form>
            </div>
        </Layout>
    );
}

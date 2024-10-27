import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    
        // 유저 정보 (하드코딩된 값)
        const validUsername = process.env.NEXT_PUBLIC_USER_NAME;  // 아이디
        const validPassword = process.env.NEXT_PUBLIC_USER_PASSWORD; // 비밀번호
    
        // 로그로 확인
        console.log('입력된 아이디:', username);
        console.log('입력된 비밀번호:', password);
        console.log('유효한 아이디:', validUsername);
        console.log('유효한 비밀번호:', validPassword);
    
        if (username === validUsername && password === validPassword) {
            // 로그인 성공
            const loginTime = Date.now(); // 현재 시간
            localStorage.setItem('isAuthenticated', 'true'); // 로그인 상태 저장
            localStorage.setItem('loginTime', loginTime); // 로그인 시간 저장
            router.push('/admin'); // 관리자 페이지로 리디렉션
        } else {
            // 로그인 실패
            setError('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
                <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-8 rounded shadow">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">아이디</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">비밀번호</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200">
                        로그인
                    </button>
                </form>
            </div>
        </Layout>
    );
}

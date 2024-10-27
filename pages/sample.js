import { useEffect, useState } from 'react';

export default function SamplePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mongodb');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        // 필요한 정보만 필터링
        const filteredData = jsonData.map(item => ({
          title: item.title || '',
          youtube: item.youtube || '',
          description: item.description || '',
          imgSrc: item.imgSrc || '',
          projectId: item.projectId || '',
          tag1: item.tag1 || '',
          tag2: item.tag2 || '',
          date: item.date || null,
        }));
        setData(filteredData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error.message); // 에러 메시지 설정
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // 데이터 로딩 중 메시지
  }

  if (error) {
    return <p>Error: {error}</p>; // 에러 발생 시 메시지
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  );
}

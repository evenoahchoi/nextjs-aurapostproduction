import { useEffect, useState } from 'react';

export default function SamplePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/mongodb')
      .then((res) => res.json())
      .then((data) => {
        // 필요한 정보만 필터링
        const filteredData = data.map(item => ({
          title: item.title || '',  // title 필드
          youtube: item.youtube || '',  // youtube 필드
          description: item.description || '',  // description 필드
          imgSrc: item.imgSrc || '',  // imgSrc 필드
          projectId: item.projectId || '',  // projectId 필드
          tag1: item.tag1 || '',  // tag1 필드
          tag2: item.tag2 || '',  // tag2 필드
          date: item.date || null,  // date 필드 (null 처리)
        }));
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error); // 에러 처리
      });
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // 데이터를 JSON 형태로 출력
      ) : (
        <p>Loading...</p> // 데이터 로딩 중 메시지
      )}
    </div>
  );
}

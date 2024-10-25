import { useEffect, useState } from 'react';

export default function SamplePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/mongodb')
      .then((res) => res.json())
      .then((data) => {
        // 필요한 정보만 필터링
        const filteredData = data.map(item => ({
          title: item.properties.Name.title[0]?.plain_text || '',
          youtube: item.properties.Youtube?.url || '',
          description: item.properties.Description.select ? item.properties.Description.select.name : '',
          imgSrc: item.cover.external?.url || '',
          projectId: item.id,  // 프로젝트 ID
          tag1: item.properties.Tags.multi_select[0]?.name || '',  // 태그를 문자열로 변환
          tag2: item.properties.Tags.multi_select[1]?.name || '',  // 태그를 문자열로 변환
          date: item.created_time || null  // 날짜 (null 처리)
        }));
        setData(filteredData);
      });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}





// import { useEffect, useState } from 'react';

// export default function SamplePage() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('/api/mongodb')
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div>
//       <h1>Sample MongoDB Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

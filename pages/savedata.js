import { useEffect, useState } from 'react';

export default function SaveDataPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadError, setDownloadError] = useState(null); // 다운로드 오류 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 예시로 MongoDB API를 호출하여 데이터를 가져오는 코드입니다.
        const response = await fetch('/api/mongodb');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        // 필터링 후 로컬 스토리지에 저장
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

        // 데이터를 로컬 스토리지에 저장
        localStorage.setItem('data', JSON.stringify(filteredData));

        // 서버로 데이터를 전송하여 JSON 파일로 저장
        await saveData(filteredData);

      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 서버로 데이터를 보내서 JSON 파일로 저장하는 함수
  const saveData = async (data) => {
    const response = await fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
    } else {
      console.error('Error saving data');
    }
  };

  // JSON 파일 다운로드 함수
  const downloadData = () => {
    try {
      // public 폴더에 이미 저장된 data.json 파일을 다운로드 링크로 설정
      const a = document.createElement('a');
      a.href = '/data.json';  // public 폴더에 저장된 파일 경로
      a.download = 'data.json';  // 다운로드될 파일명
      a.click();
    } catch (error) {
      setDownloadError('Failed to download the file. Please try again.');
      console.error('Download failed:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1 className="title">DB 데이터 다운로드</h1>
      <p className="description">
        서버에 데이터가 성공적으로 저장되었습니다.
      </p>

      {downloadError && <p className="error-message">{downloadError}</p>} {/* 오류 메시지 표시 */}

      <button onClick={downloadData} className="download-button">
        DB 데이터 다운로드
      </button>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .description {
          font-size: 1rem;
          color: #555;
          margin-bottom: 30px;
        }
        .download-button {
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        .download-button:hover {
          background-color: #45a049;
        }
        .download-button:active {
          background-color: #388e3c;
        }
        .error-message {
          color: red;
          font-size: 1rem;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

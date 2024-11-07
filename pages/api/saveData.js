// pages/api/saveData.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // 클라이언트에서 보낸 데이터 받아오기
      const data = req.body;

      // 파일 경로 설정 (public 폴더 안에 저장)
      const filePath = path.join(process.cwd(), 'public', 'data.json');
      
      // 데이터를 JSON 형식으로 파일에 저장
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving data', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // 현재 날짜와 시간을 기반으로 파일명 생성 (예: data_2024-11-07_123456.json)
      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}_${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}${String(date.getSeconds()).padStart(2, '0')}`;
      const fileName = `data_${formattedDate}.json`;

      // public/DBbackup 폴더에 파일 저장
      const filePath = path.join(process.cwd(), 'public', 'DBbackup', fileName);

      // 폴더가 없으면 생성
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
      }

      // JSON 파일로 저장
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      // 클라이언트에 파일 경로 응답
      res.status(200).json({ message: 'File saved successfully', filePath: `/DBbackup/${fileName}` });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// pages/api/projects.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db("projectstest");
    const collection = db.collection("posttest2");

    if (req.method === 'POST') {
        const { title, youtube, description, imgSrc, tag1, tag2, date } = req.body;

        try {
            // 새 프로젝트 추가
            const newProject = {
                title,
                youtube,
                description,
                imgSrc,
                tag1,
                tag2,
                date,
            };

            await collection.insertOne(newProject);
            return res.status(201).json({ message: '프로젝트가 추가되었습니다!' });
        } catch (error) {
            console.error('Error inserting project:', error);
            return res.status(500).json({ message: '프로젝트 추가 중 오류 발생' });
        } finally {
            client.close(); // 클라이언트 연결 해제
        }
    } else {
        // 다른 HTTP 메서드는 처리하지 않음
        client.close(); // 클라이언트 연결 해제
        return res.status(405).json({ message: 'Method not allowed' });
    }
}

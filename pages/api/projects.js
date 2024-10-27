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
                date: new Date(date), // date를 Date 객체로 변환하여 저장
            };

            await collection.insertOne(newProject);
            return res.status(201).json({ message: '프로젝트가 추가되었습니다!' });
        } catch (error) {
            console.error('Error inserting project:', error);
            return res.status(500).json({ message: '프로젝트 추가 중 오류 발생' });
        }
    } else if (req.method === 'GET') {
        try {
            // 프로젝트 목록 가져오기 및 날짜 기준으로 정렬
            const projects = await collection.find().sort({ date: -1 }).toArray();
            return res.status(200).json(projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
            return res.status(500).json({ message: '프로젝트 가져오는 중 오류 발생' });
        }
    } else {
        // 다른 HTTP 메서드는 처리하지 않음
        return res.status(405).json({ message: 'Method not allowed' });
    }
}

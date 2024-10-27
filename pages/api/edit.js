// pages/api/edit.js
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const client = await MongoClient.connect(process.env.MONGO_URI);
        const db = client.db("projectstest");
        const collection = db.collection("posttest2");

        const { id, title, youtube, description, imgSrc, tag1, tag2, date } = req.body; // date 필드 추가

        try {
            // 프로젝트 업데이트
            await collection.updateOne(
                { _id: new ObjectId(id) }, // 여기에서 new를 추가합니다.
                {
                    $set: {
                        title,
                        youtube,
                        description,
                        imgSrc,
                        tag1,
                        tag2,
                        date: new Date(date), // date를 Date 객체로 변환하여 저장
                    },
                }
            );

            res.status(200).json({ message: 'Project updated successfully!' });
        } catch (error) {
            console.error('Error updating project:', error);
            res.status(500).json({ message: 'Failed to update project.' });
        } finally {
            client.close();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

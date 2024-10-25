// pages/api/save-notion-data.js
import { MongoClient } from 'mongodb';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const mongoUri = process.env.MONGO_URI; // MongoDB 연결 문자열

export default async function handler(req, res) {
    const client = new MongoClient(mongoUri);
    try {
        await client.connect();
        const db = client.db('projects'); // 사용할 데이터베이스 이름
        const collection = db.collection('post'); // 저장할 컬렉션 이름

        // Notion 데이터 가져오기
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Notion-Version': '2022-02-22',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NOTION_TOKEN}`
            },
            body: JSON.stringify({ page_size: 100 })
        };

        let hasMore = true;
        let startCursor = undefined;
        let projects = [];

        // 모든 데이터를 반복적으로 가져옴
        while (hasMore) {
            if (startCursor) {
                options.body = JSON.stringify({
                    ...JSON.parse(options.body),
                    start_cursor: startCursor
                });
            }

            const response = await notion.databases.query({
                database_id: process.env.NOTION_DATABASE_ID,
                start_cursor: startCursor,
                page_size: 100
            });

            projects = projects.concat(response.results);
            hasMore = response.has_more;
            startCursor = response.next_cursor;
        }

        // 데이터를 MongoDB에 저장
        await collection.deleteMany({}); // 기존 데이터를 삭제하고 새 데이터로 교체
        await collection.insertMany(projects);

        res.status(200).json({ message: 'Data saved to MongoDB successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save data' });
    } finally {
        await client.close();
    }
}

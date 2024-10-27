import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGO_URI; // MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('projectstest');
    const collection = database.collection('posttest2');

    // 데이터 조회 및 최신순으로 정렬
    const data = await collection.find({}).sort({ date: -1 }).toArray(); // date 필드를 기준으로 내림차순 정렬
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '데이터를 가져오는 데 실패했습니다.' });
  } finally {
    await client.close();
  }
}

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGO_URI; // MongoDB URI로 교체
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('projects');
    const collection = database.collection('post');
    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  } finally {
    await client.close();
  }
}

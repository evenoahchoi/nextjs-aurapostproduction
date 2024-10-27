// pages/api/delete.js
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const client = new MongoClient(process.env.MONGO_URI);
        const { id } = req.body;

        try {
            await client.connect();
            const db = client.db('projectstest');
            const collection = db.collection('posttest2');

            // 유효한 ObjectId인지 검사
            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ error: 'Invalid ID' });
            }

            const result = await collection.deleteOne({ _id: new ObjectId(id) });

            if (result.deletedCount === 1) {
                res.status(200).json({ message: 'Project deleted successfully' });
            } else {
                res.status(404).json({ error: 'Project not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete project' });
        } finally {
            await client.close();
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

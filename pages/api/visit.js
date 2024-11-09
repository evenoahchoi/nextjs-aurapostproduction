import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('projectstest');
  const visitorsCollection = db.collection('visitors');

  const today = new Date();
  const yearMonth = `${today.getFullYear()}-${today.getMonth() + 1}`;
  const day = `${yearMonth}-${today.getDate()}`;

  // 컬렉션이 없는 경우 생성
  await db.createCollection("visitors").catch(err => {
    if (err.codeName !== 'NamespaceExists') {
      console.error("Collection creation error:", err);
    }
  });

  await visitorsCollection.updateOne(
    { type: 'total' },
    { $inc: { count: 1 } },
    { upsert: true }
  );
  await visitorsCollection.updateOne(
    { type: 'monthly', month: yearMonth },
    { $inc: { count: 1 }, $setOnInsert: { month: yearMonth } },
    { upsert: true }
  );
  await visitorsCollection.updateOne(
    { type: 'daily', day },
    { $inc: { count: 1 }, $setOnInsert: { day } },
    { upsert: true }
  );

  res.status(200).json({ message: 'Visitor count updated' });
}

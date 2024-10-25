// pages/sync-notion-to-mongo.js
import { useState } from 'react';

export default function SyncNotionToMongo() {
    const [message, setMessage] = useState('');

    const handleSync = async () => {
        const res = await fetch('/api/save-notion-data');
        const data = await res.json();
        if (res.ok) {
            setMessage('Data synced to MongoDB successfully');
        } else {
            setMessage(`Error: ${data.error}`);
        }
    };

    return (
        <div>
            <h1>Sync Notion Data to MongoDB</h1>
            <button onClick={handleSync} className="sync-button">Sync Data</button>
            {message && <p>{message}</p>}
        </div>
    );
}

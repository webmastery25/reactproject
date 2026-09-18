import { useState, useEffect } from 'react';

interface Entry {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEntries = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/entries');
      if (!res.ok) throw new Error('Failed to fetch data');
      const data: Entry[] = await res.json();
      setEntries(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error fetching data';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      const res = await fetch(`/api/entries/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      setEntries(entries.filter((entry) => entry._id !== id));
    } catch (err) {
      alert('Could not delete entry');
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0 }}>Admin Dashboard</h2>
          <p style={{ margin: '4px 0 0', color: '#666' }}>
            Total Submissions: <strong>{entries.length}</strong>
          </p>
        </div>
        <button
          onClick={fetchEntries}
          style={{
            padding: '8px 14px',
            backgroundColor: '#1a73e8',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          🔄 Refresh
        </button>
      </div>

      {loading && <p>Loading submissions...</p>}
      {error && <p style={{ color: '#d93025' }}>{error}</p>}

      {!loading && entries.length === 0 && (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <p style={{ margin: 0, color: '#666' }}>No form submissions in the database yet.</p>
        </div>
      )}

      {!loading && entries.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f4', textAlign: 'left' }}>
                <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Date</th>
                <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Name</th>
                <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Email</th>
                <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Message</th>
                <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>
                    {new Date(entry.createdAt).toLocaleDateString()} <br />
                    <span style={{ fontSize: '11px', color: '#888' }}>
                      {new Date(entry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontWeight: '500' }}>{entry.name}</td>
                  <td style={{ padding: '12px' }}>
                    <a href={`mailto:${entry.email}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      {entry.email}
                    </a>
                  </td>
                  <td style={{ padding: '12px', color: '#333', maxWidth: '300px', wordBreak: 'break-word' }}>
                    {entry.message}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button
                      onClick={() => handleDelete(entry._id)}
                      style={{
                        padding: '6px 10px',
                        backgroundColor: '#fce8e6',
                        color: '#c5221f',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

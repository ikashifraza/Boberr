import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  const sendSMS = async () => {
    if (!number || number.length < 10) {
      setStatus('Please enter a valid phone number.');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch(
        `https://shadowscriptz.xyz/shadowapisv4/smsbomberapi.php?number=${number}`
      );

      if (response.ok) {
        setStatus('Request sent! (for demo only)');
      } else {
        setStatus('Failed to send request.');
      }
    } catch (err) {
      setStatus('Error occurred: ' + err.message);
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: 'sans-serif' }}>
      <h1>📱 Raza Boomber</h1>
      <p><strong>For educational/demo use only</strong></p>

      <input
        type="text"
        placeholder="Enter number (e.g. 923001234567)"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />
      <br /><br />
      <button onClick={sendSMS} style={{ padding: 10, backgroundColor: '#111', color: '#fff' }}>
        Send Test Request
      </button>
      <p>{status}</p>
    </div>
  );
}

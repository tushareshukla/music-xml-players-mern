// frontend/src/components/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    axios.get('/music')
      .then(response => {
        setMusicData(response.data);
      })
      .catch(error => {
        console.error('Error fetching music data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Music Player</h1>
      <ul>
        {musicData.map((music, index) => (
          <li key={index}>{music.title} by {music.composer}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

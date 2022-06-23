import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

// const backendUrl = 'http://localhost:4711/jobs';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const url = `${backendUrl}/jobs`;

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setJobs(data);
    };
    fetchJobs();
  });

  return (
    <div className='App'>
      <h1>Jobs</h1>
      <p>There are {jobs.length} jobs!</p>
    </div>
  );
}

export default App;

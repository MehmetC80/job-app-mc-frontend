import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

// const backendUrl = 'http://localhost:4711/jobs';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const url = `${backendUrl}/jobs`;

function App() {
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setMyJobs(data);
    };
    fetchJobs();
  });

  return (
    <div className='App'>
      <h1>Jobs</h1>

      {myJobs.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          {' '}
          <p>There are {myJobs.length} jobs!</p>
          <div>
            {myJobs.jobs.map((job) => {
              return (
                <>
                  <div>{job.position}</div>
                  <div>{job.bulkText}</div>
                  <div>{job.url}</div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

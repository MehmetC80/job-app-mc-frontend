import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <div className='App'>
      <h1>Jobs</h1>
      <p>There are {jobs.length} jobs!</p>
    </div>
  );
}

export default App;

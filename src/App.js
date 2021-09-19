import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/card';

import './App.scss';

function App() {
  const [nasaApodData, setNasaApodData] = useState([]);
  const nasaApodUrl = `https://api.nasa.gov/planetary/apod?count=2&thumbs&api_key=${process.env.REACT_APP_APIKEY}`;

  useEffect(() => {
    axios.get(nasaApodUrl)
      .then((response) => {
        setNasaApodData(response.data)
      })
      .catch(error => {
        console.error(`Failed with ${error}`);
      })
  }, []);

  // const getNasaApodData = async (nasaApodUrl) => {
  //   try {
  //     const nasaApodData = await axios.get(nasaApodUrl);
  //     setNasaApodData(nasaApodData.data);
  //   }
  //   catch(error) {
  //     console.error(`Failed with ${error}`);
  //     if (error.response && error.response.status === 404) { console.clear() };
  //   }
  // }

  return (
    <div className="App">
      <nav>spacestagram</nav>

      {nasaApodData.map(( apodData, index) => {

        return (
          <Card
            key={index}
            apodData={apodData}
          />
        )
      })}
    </div>
  );
}

export default App;

import { useState } from 'react';
import axios from 'axios';

const dateRange = `start_date=2021-02-21&end_date=2021-03-01`;

const nasaApodUrl = `https://api.nasa.gov/planetary/apod?count=10&thumbs&api_key=${process.env.REACT_APP_APIKEY}`;
// const nasaApodUrl = `https://api.nasa.gov/planetary/apod?${dateRange}&thumbs=true&api_key=${process.env.REACT_APP_APIKEY}`;

export default function useApplicationData() {
  const [nasaApodData, setNasaApodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  const getNasaApodData = async () => {
    try {
      const nasaApodData = await axios.get(nasaApodUrl);
      setNasaApodData(prev => ([...prev, ...nasaApodData.data]));
      setIsLoading(false);
    }
    catch(error) {
      console.error(`Failed with ${error}`);
      if (error.response && error.response.status === 404) { console.clear() };
    }
  }

  return { nasaApodData, isLoading, getNasaApodData };
}

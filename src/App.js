import { useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import Card from './components/card';
import Loading from './components/loading';
import RightPanel from './components/rightPanel'

import { Section, Body, Posts } from './App.styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const [nasaApodData, setNasaApodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dateRange = `start_date=2021-02-21&end_date=2021-03-01`;

  const nasaApodUrl = `https://api.nasa.gov/planetary/apod?count=10&thumbs&api_key=${process.env.REACT_APP_APIKEY}`;
  // const nasaApodUrl = `https://api.nasa.gov/planetary/apod?${dateRange}&thumbs=true&api_key=${process.env.REACT_APP_APIKEY}`;

  const getNasaApodData = async () => {
    try {
      const nasaApodData = await axios.get(nasaApodUrl);
      setNasaApodData(prev => ([...prev, ...nasaApodData.data]));
      console.log('getting new data')
      setIsLoading(false);
    }
    catch(error) {
      console.error(`Failed with ${error}`);
      if (error.response && error.response.status === 404) { console.clear() };
    }
  }
  useEffect(() => {
    setIsLoading(true);
    getNasaApodData();
  },[])

  return (
    <Section>
      <AppBar position='static' style={{ background: '#000000' }}>
        <Toolbar>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1, fontFamily: 'Oleo Script' }}>
            spacestagram
          </Typography>
        </Toolbar>
      </AppBar>
      <Body>
        <Posts>
          { isLoading &&
            <Loading title='Loading...' subTitle='Please do not close the browser, we are downloading photos from the space' />}

          {!isLoading &&
            <InfiniteScroll
              dataLength={nasaApodData.length}
              next={getNasaApodData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {nasaApodData.map( apodData => {
                return (
                  <Card
                    key={apodData.date}
                    apodData={apodData}
                  />
                )
              })}
            </InfiniteScroll>
          }
        </Posts>
        <RightPanel/>
      </Body>
    </Section>
  );
}

export default App;

import { useEffect } from 'react';
import useApplicationData from './components/hooks/useApplicationData';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from './components/card';
import Loading from './components/loading';
import RightPanel from './components/rightPanel'

import { Section, Body, Posts } from './App.styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const { nasaApodData, isLoading, getNasaApodData } = useApplicationData();

  useEffect(() => {
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
              loader={<h4>Loading More Posts...</h4>}
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

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';
import useApplicationData from './hooks/useApplicationData';

import Card from './card';
import Loading from './loading';
import RightPanel from './rightPanel'

import { Body, Posts } from '../App.styles';

export default function Home() {
  const { nasaApodData, isLoading, getNasaApodData, setNasaApodData } = useApplicationData();

  useEffect(() => {
    getNasaApodData();
  },[])

  return (
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
      <RightPanel setNasaApodData={setNasaApodData}/>
    </Body>
  )
}
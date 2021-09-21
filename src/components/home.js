import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useApplicationData from './hooks/useApplicationData';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme, useScrollTrigger, Box, Fab, Zoom, ThemeProvider } from '@mui/material';
import Card from './card';
import Loading from './loading';
import RightPanel from './rightPanel'
import { Body, Posts } from '../App.styles';

export default function Home(props) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#000000',
        contrastText: '#fff',
      },
    }
  });
  
  const { nasaApodData, isLoading, getNasaApodData, setNasaApodData } = useApplicationData();

  useEffect(() => {
    getNasaApodData();
  },[])

  const ScrollTop = (props) => {
    const trigger = useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {props.children}
        </Box>
      </Zoom>
    );
  }

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
      <ScrollTop {...props}>
        <ThemeProvider theme={theme}>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ThemeProvider>
      </ScrollTop>
    </Body>
  )
}
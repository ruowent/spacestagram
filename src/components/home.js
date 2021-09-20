import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';
import useApplicationData from './hooks/useApplicationData';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Card from './card';
import Loading from './loading';
import RightPanel from './rightPanel'

import { Body, Posts } from '../App.styles';


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ScrollTop(props) {
  
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

export default function Home(props) {
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
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Body>
  )
}
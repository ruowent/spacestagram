import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { createTheme, Button, TextField, ThemeProvider, Alert } from '@mui/material';
import Card from '../card/';
import Loading from '../loading';

import { Body, Posts } from '../../App.styles';
import { PanelContainer, Title, Text } from '../rightPanel/rightPanel.styles';
import { Form, ButtonContainer } from './search.styles';

export default function Search() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#000000',
        contrastText: '#fff',
      },
    }
  });

  // Timezone offset for EST and format today's date
  const today = new Date();
  const offset = -300;
  const estDate = new Date(today.getTime() + offset*60*1000).toISOString().split('T')[0]; 

  const [searchDate, setSearchDate] = useState(estDate);
  const [searchResult, setSearchResult] = useState({});
  const [error, setError] = useState('');
  const [isSearching, setIsSearching ]= useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchDate(event.target[0].value);
  };

  const searchNasaApodData = async (searchDate) => {
    const nasaApodUrl = `https://api.nasa.gov/planetary/apod?start_date=${searchDate}&end_date=${searchDate}&api_key=${process.env.REACT_APP_APIKEY}`;

    try {
      const nasaApodData = await axios.get(nasaApodUrl);
      setSearchResult(nasaApodData.data[0]);
      setIsSearching(false);
    }
    catch(error) {
      console.error(`Failed with ${error}`);
      if (error.response && error.response.status === 404) { console.clear() };
      if (error.response && error.response.status === 400) {
        console.clear();
        setError(`Please enter a valid date between 1995-06-16 and ${estDate}`);
      }
    }
  }

  useEffect(() => {
    setError('');
    setIsSearching(true);
    searchNasaApodData(searchDate);
  }, [searchDate])

  return (
    <Body>
      <Posts>
        { isSearching && !error &&
          <Loading title='Loading...' subTitle='Please do not close the browser, we are downloading photo from the space' />}
        { !isSearching && searchResult && <Card apodData={searchResult}/>}
      </Posts>
      <PanelContainer>
        <Title><em style={{fontFamily: 'Oleo Script' }}>Spacestagram</em> Search 🚀</Title>
        <Text>Search your favourite cosmo image of the day</Text>
        <Form onSubmit={handleSubmit}>
          <TextField
            id='date'
            label='Pick a Date'
            type='date'
            sx={{ width: 300 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ButtonContainer>
            <ThemeProvider theme={theme}>
              <Button variant='outlined' type='submit' color='secondary'>Search</Button>
              <Button variant='outlined' type='reset' color='secondary'>Clear</Button>
            </ThemeProvider>
          </ButtonContainer>
        </Form>
        
        {error &&
          <Alert variant='outlined' severity='error' style={{ margin: '1rem' }}>
            {error}
          </Alert>
        }
      </PanelContainer>
      </Body>
  );
}

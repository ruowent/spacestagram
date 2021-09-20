import { useEffect, useState } from 'react';
import axios from 'axios';

import { createTheme, Button, TextField, ThemeProvider } from '@mui/material';
import Card from './card';
import Alert from '@mui/material/Alert';
import Loading from './loading';

import { Body, Posts } from '../App.styles';
import { PanelContainer, Title, Text, SmallText } from './rightPanel.styles';
import { Form, ButtonContainer } from './search.styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000',
      contrastText: '#fff',
    },
  }
});

export default function Search() {
  const today = new Date().toISOString().split('T')[0];

  const [searchDate, setSearchDate] = useState(today);
  const [searchResult, setSearchResult] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading ]= useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchDate(event.target[0].value);
  };

  const getNasaApodData = async (searchDate) => {
    const nasaApodUrl = `https://api.nasa.gov/planetary/apod?start_date=${searchDate}&end_date=${searchDate}&api_key=${process.env.REACT_APP_APIKEY}`;

    try {
      const nasaApodData = await axios.get(nasaApodUrl);
      console.log('try',nasaApodData.data[0])
      setSearchResult(nasaApodData.data[0]);
      setIsLoading(false);
    }
    catch(error) {
      console.error(`Failed with ${error}`);
      if (error.response && error.response.status === 404) { console.clear() };
      if (error.response && error.response.status === 400) setError(`Please enter a valid date between 1995-06-16 and ${today}`)
    }
  }

  useEffect(() => {
    setError('');
    setIsLoading(true);
    getNasaApodData(searchDate);
  }, [searchDate])

  return (
    <Body>
      <Posts>
        { isLoading &&
          <Loading title='Loading...' subTitle='Please do not close the browser, we are downloading photo from the space' />}
        { !isLoading && searchResult && <Card apodData={searchResult}/>}
      </Posts>
      <PanelContainer>
        <Title><em style={{fontFamily: 'Oleo Script' }}>Spacetagram</em> Search</Title>
        <Text>Search your favourite cosmo image of the day</Text>
        <Form onSubmit={handleSubmit}>
          <TextField
            id="date"
            label="Pick a Date"
            type="date"
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
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        }
      </PanelContainer>
      </Body>
  );
}

import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/card';
import Loading from './components/loading';
import RightPanel from './components/rightPanel'

import { Section, Body } from './App.styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const [nasaApodData, setNasaApodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dateRange = `start_date=2021-02-21&end_date=2021-03-01`;
  // const [like, setLike] = useState(false);
  // const nasaApodUrl = `https://api.nasa.gov/planetary/apod?count=10&thumbs&api_key=${process.env.REACT_APP_APIKEY}`;
  const nasaApodUrl = `https://api.nasa.gov/planetary/apod?${dateRange}&thumbs=true&api_key=${process.env.REACT_APP_APIKEY}`;

  // useEffect(() => {
  //   axios.get(nasaApodUrl)
  //     .then((response) => {
  //       setNasaApodData(response.data)
  //     })
  //     .catch(error => {
  //       console.error(`Failed with ${error}`);
  //     })
  // }, []);

  // useEffect(() => {
  //   console.log('hihi')
  //   setIsLoading(false)
  // }, [nasaApodData.length])

  const getNasaApodData = async () => {
    try {
      const nasaApodData = await axios.get(nasaApodUrl);
      setNasaApodData(nasaApodData.data);
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
  
  console.log(nasaApodData)
  // const nasaApodData = [
  //   {
  //     date: '12/16/2020',
  //     explanation: "Taken over the course of an hour shortly after local midnight on December 13, 35 exposures were used to create this postcard from Earth. The composited night scene spans dark skies above the snowy Italian Dolomites during our fair planet's annual Geminid meteor shower. Sirius, alpha star of Canis Major and the brightest star in the night, is grazed by a meteor streak on the right. The Praesepe star cluster, also known as M44 or the Beehive cluster, itself contains about a thousand stars but appears as a smudge of light far above the southern alpine peaks near the top. The shower's radiant is off the top of the frame though, near Castor and Pollux the twin stars of Gemini. The radiant effect is due to perspective as the parallel meteor tracks appear to converge in the distance. As Earth sweeps through the dust trail of asteroid 3200 Phaethon, the dust that creates Gemini's meteors enters Earth's atmosphere traveling at about 22 kilometers per second. Submitted to APOD: Notable images of the 2020 Geminids Meteor Shower",
  //     url: 'https://apod.nasa.gov/apod/image/2012/GeminidMeteorsStePelle1024.jpg',
  //     title: 'Gemini\'s Meteors',
  //   },
  //   {
  //     date: '2/19/2006',
  //     explanation: "Who dunnit? Like a scene from a space mystery movie, a spacesuit floated away from the International Space Station earlier this month, but no investigation was needed. It was pushed out by the space station crew. Dubbed Suitsat-1, the unneeded Russian Orlan spacesuit filled mostly with old clothes was fitted with a faint radio transmitter and released to orbit the Earth. Suitsat-1 will orbit once every 90 minutes until it burns up in the Earth's atmosphere within a few weeks. The suit circled the Earth twice before its radio signal became unexpectedly weak. Pictured above, the lifeless spacesuit was photographed as it drifted away from the Earth-orbiting space station earlier this month.",
  //     url: 'https://apod.nasa.gov/apod/image/0602/suitsat1_nasa.jpg',
  //     title: 'SuitSat-1: A Spacesuit Floats Free',
  //   }
  // ];

  return (
    <Section>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            spacestagram
          </Typography>
        </Toolbar>
      </AppBar>
      <Body>
        <div>
          { isLoading && <Loading title='Loading...' subTitle='Please do not close the browser, we are downloading photos from the space' />}
          { !isLoading && nasaApodData.map(( apodData, index) => {

            return (
              <Card
                key={index}
                apodData={apodData}
                // like={like}
                // setLike={setLike}
              />
            )
          })}
        </div>
        <RightPanel/>
      </Body>
    </Section>
  );
}

export default App;

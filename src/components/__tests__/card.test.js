import React from 'react';

import { render, cleanup } from '@testing-library/react';

import Card from '../card';

afterEach(cleanup);

const apodData = [
  {
    date: "2008-01-10",
    explanation: "A mere 11 million light-years away, Centaurus A is a giant elliptical galaxy - the closest active galaxy to Earth. This remarkable composite view of the galaxy combines image data from the x-ray ( Chandra), optical(ESO), and radio(VLA) regimes. Centaurus A's central region is a jumble of gas, dust, and stars in optical light, but both radio and x-ray telescopes trace a remarkable jet of high-energy particles streaming from the galaxy's core. The cosmic particle accelerator's power source is a black hole with about 10 million times the mass of the Sun coincident with the x-ray bright spot at the galaxy's center. Blasting out from the active galactic nucleus toward the upper left, the energetic jet extends about 13,000 light-years. A shorter jet extends from the nucleus in the opposite direction. Other x-ray bright spots in the field are binary star systems with neutron stars or stellar mass black holes. Active galaxy Centaurus A is likely the result of a merger with a spiral galaxy some 100 million years ago.",
    hdurl: "https://apod.nasa.gov/apod/image/0801/cena_comp.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Active Galaxy Centaurus A",
    url: "https://apod.nasa.gov/apod/image/0801/cena_comp800.jpg"
    }
];

it("renders without crashing", () => {
  render(<Card apodData={apodData}/>);
});


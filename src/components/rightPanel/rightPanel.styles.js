import styled from 'styled-components';

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 23rem;
  align-items: center;
  
  @media only screen and (max-width: 1200px) {
    max-width: 40rem;
    padding: 0 1rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 600px) {
    max-width: 375px;
  }
`
export const Title = styled.h2`
  font-size: 1.5rem;
`

export const Text = styled.p`
  font-size: 1rem;
  padding-bottom: 1rem;
`

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: #929191;
  font-weight: bold;
`

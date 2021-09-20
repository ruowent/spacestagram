import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    align-items: center;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }
`

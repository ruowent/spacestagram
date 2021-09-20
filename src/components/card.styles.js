import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  width: 40rem;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 600px) {
    max-width: 375px;
  }
`

export const TitleContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.h3`
  font-size: 1rem;
`

export const Text = styled.div`
  padding: 0.5rem 0;
`

export const Image = styled.img`
  width: 40rem;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const Video = styled.iframe`
  width: 40rem;
  height: 28rem;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const Textbox = styled.div`
  padding: 1rem;
  padding-top: 0.1rem;
`

export const Description = styled.div`
  padding: 1rem;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;
`

export const Buttons= styled(ButtonContainer)`
  justify-content: flex-start;
  padding: 0;
`

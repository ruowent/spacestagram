import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  width: 40rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const Title = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 40rem;
  object-fit: contain;
`

export const Textbox = styled.div`
  padding: 1rem;
  padding-top: 0.1rem;
`

export const Description = styled.div`
  padding: 1rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`
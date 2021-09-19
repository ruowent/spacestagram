import styled from 'styled-components'
const ironGray = '#5F6062'

export const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 1rem;
`

export const Title = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: ${ironGray};
  margin: 1rem 0rem;
  text-align: center;
`

export const SubTitle = styled.div`
  font-size: 0.75em;
  color: ${ironGray};
  text-align: center;
`

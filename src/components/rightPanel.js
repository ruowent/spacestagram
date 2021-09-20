import { PanelContainer, Title, Text, SmallText } from './rightPanel.styles';

export default function RightPanel() {
  return (
    <PanelContainer>
      <Title>Welcome to <em style={{fontFamily: 'Oleo Script' }}>Spacetagram</em> 🪐</Title>
      <Text>
        Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. <br/> Brought to you by Astronomy Picture of the Day (NASA).
      </Text>
      <SmallText>
        Created by <a href='https://github.com/ruowent'>Ruowen Tang</a>
      </SmallText>
    </PanelContainer>
  )
}
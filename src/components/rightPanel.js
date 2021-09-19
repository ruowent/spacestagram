import { PanelContainer, Title, Text, SmallText } from './rightPanel.styles';

export default function RightPanel() {
  return (
    <PanelContainer>
      <Title>Welcome to SPACESTAGRAM 🪐</Title>
      <Text>
        Brought to you by Astronomy Picture of the Day (NASA). This is one of the most popular websites at NASA and across all federal agencies.
      </Text>
      <SmallText>
        Created by <a href='https://github.com/ruowent'>Ruowen Tang</a>
      </SmallText>
    </PanelContainer>
  )
}